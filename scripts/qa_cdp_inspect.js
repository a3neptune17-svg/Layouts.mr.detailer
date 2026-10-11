const fs = require('fs');
const path = require('path');

async function main() {
  const listRes = await fetch('http://127.0.0.1:9222/json/list');
  const pages = await listRes.json();
  const page = pages.find(p => p.url && p.url.includes('ohio-preview') && p.type === 'page') || pages.find(p => p.type === 'page');
  if (!page) {
    console.error('No page found');
    return;
  }
  console.log('Connecting to page:', page.title, page.url, page.webSocketDebuggerUrl);

  const ws = new WebSocket(page.webSocketDebuggerUrl);
  let id = 1;
  const pending = new Map();

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) reject(msg.error);
      else resolve(msg.result);
    }
  };

  await new Promise(r => ws.onopen = r);

  function send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const msgId = id++;
      pending.set(msgId, { resolve, reject });
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });
  }

  async function evaluate(expression) {
    const res = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
    return res.result ? res.result.value : null;
  }

  async function screenshot(filename) {
    const res = await send('Page.captureScreenshot', { format: 'png' });
    const buffer = Buffer.from(res.data, 'base64');
    const outPath = path.join(__dirname, '..', 'outputs', filename);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, buffer);
    console.log('Saved screenshot:', outPath);
  }

  // 1. Reload page
  console.log('Reloading page...');
  await send('Page.reload', { ignoreCache: true });
  await new Promise(r => setTimeout(r, 2000));

  // 2. Inspect brand logos in Dark Mode
  const darkLogoCheck = await evaluate(`(() => {
    const darkLogo = document.querySelector('.or-brand-logo-dark');
    const lightLogo = document.querySelector('.or-brand-logo-light');
    return {
      darkExists: !!darkLogo,
      darkDisplay: darkLogo ? window.getComputedStyle(darkLogo).display : null,
      darkOffsetWidth: darkLogo ? darkLogo.offsetWidth : 0,
      lightExists: !!lightLogo,
      lightDisplay: lightLogo ? window.getComputedStyle(lightLogo).display : null,
      lightOffsetWidth: lightLogo ? lightLogo.offsetWidth : 0,
      theme: document.querySelector('.ohio-rebuild')?.getAttribute('data-theme')
    };
  })()`);
  console.log('Logo Check (Dark Mode):', darkLogoCheck);

  // 3. Inspect Navigation and Own a Studio plus sign
  const navCheck = await evaluate(`(() => {
    const studioLink = Array.from(document.querySelectorAll('a, button, summary')).find(el => el.textContent.includes('Own a Studio'));
    const plusSigns = Array.from(document.querySelectorAll('.or-plus, .or-plus-indicator, [class*="plus"]')).map(el => ({
      text: el.textContent,
      parent: el.parentElement?.textContent?.trim().substring(0, 30),
      display: window.getComputedStyle(el).display
    }));
    const studioParent = studioLink ? studioLink.closest('details, div, li') : null;
    const submenuItems = studioParent ? Array.from(studioParent.querySelectorAll('a')).map(a => a.textContent.trim()) : [];
    return {
      studioFound: !!studioLink,
      studioText: studioLink?.textContent?.trim(),
      studioParentTag: studioParent?.tagName,
      submenuItems,
      plusSigns
    };
  })()`);
  console.log('Nav Check:', navCheck);

  // 4. Inspect Shop section
  const shopCheck = await evaluate(`(() => {
    const shopSection = document.getElementById('shop') || document.querySelector('.or-shop-editorial') || document.querySelector('[class*="shop"]');
    const shopHeading = document.querySelector('.or-shop-heading, #shop h2, #shop h3');
    const shopImg = shopSection?.querySelector('img');
    const copyElements = Array.from(shopSection?.querySelectorAll('p, span, h2, h3, a') || []).map(e => e.textContent.trim());
    return {
      sectionExists: !!shopSection,
      headingText: shopHeading?.textContent?.trim(),
      imgSrc: shopImg?.src,
      imgNaturalWidth: shopImg?.naturalWidth,
      imgNaturalHeight: shopImg?.naturalHeight,
      copySnippets: copyElements.slice(0, 8)
    };
  })()`);
  console.log('Shop Section Check:', shopCheck);

  // 5. Inspect PPF, Coatings, Auto Mods layout & taglines
  const servicesCheck = await evaluate(`(() => {
    const panels = Array.from(document.querySelectorAll('.or-hero-panel, .or-hero-columns > div')).map(p => ({
      heading: p.querySelector('h2, h3')?.textContent?.trim(),
      tagline: p.querySelector('.or-hero-panel-tagline, .or-lime, p')?.textContent?.trim(),
      products: p.querySelector('.or-hero-products, .or-hero-panel-products')?.textContent?.trim()
    }));
    return panels;
  })()`);
  console.log('Services Panels Check:', servicesCheck);

  // 6. Inspect Blog Progress Bar
  const blogCheck = await evaluate(`(() => {
    const track = document.querySelector('.or-blog-progress-track');
    const runner = document.querySelector('.or-blog-progress-runner');
    return {
      trackExists: !!track,
      trackHeight: track ? window.getComputedStyle(track).height : null,
      runnerExists: !!runner,
      runnerWidth: runner ? window.getComputedStyle(runner).width : null,
      runnerHeight: runner ? window.getComputedStyle(runner).height : null
    };
  })()`);
  console.log('Blog Progress Check:', blogCheck);

  // 7. Inspect Footer contact and logos
  const footerCheck = await evaluate(`(() => {
    const footer = document.querySelector('footer, .or-footer, .client-footer');
    const email = Array.from(footer?.querySelectorAll('a') || []).find(a => a.href.includes('care@mrdetailer.co.in'));
    const phone = Array.from(footer?.querySelectorAll('a') || []).find(a => a.href.includes('76936'));
    const previewTwoLink = Array.from(footer?.querySelectorAll('a') || []).find(a => a.href.includes('second'));
    return {
      footerExists: !!footer,
      email: email?.textContent?.trim() || email?.href,
      phone: phone?.textContent?.trim() || phone?.href,
      previewTwoLink: previewTwoLink?.textContent?.trim() || previewTwoLink?.href
    };
  })()`);
  console.log('Footer Check:', footerCheck);

  // 8. Test Light Mode Toggle & Logo switch
  await evaluate(`document.querySelector('.ohio-theme-control')?.click()`);
  await new Promise(r => setTimeout(r, 600));

  const lightLogoCheck = await evaluate(`(() => {
    const darkLogo = document.querySelector('.or-brand-logo-dark');
    const lightLogo = document.querySelector('.or-brand-logo-light');
    return {
      darkDisplay: darkLogo ? window.getComputedStyle(darkLogo).display : null,
      darkOffsetWidth: darkLogo ? darkLogo.offsetWidth : 0,
      lightDisplay: lightLogo ? window.getComputedStyle(lightLogo).display : null,
      lightOffsetWidth: lightLogo ? lightLogo.offsetWidth : 0,
      theme: document.querySelector('.ohio-rebuild')?.getAttribute('data-theme')
    };
  })()`);
  console.log('Logo Check (Light Mode):', lightLogoCheck);

  // Switch back to Dark Mode
  await evaluate(`document.querySelector('.ohio-theme-control')?.click()`);
  await new Promise(r => setTimeout(r, 600));

  // Take screenshot of Dark Mode homepage top
  await screenshot('ohio-preview-verified-dark.png');

  // Scroll to Shop and take screenshot
  await evaluate(`document.getElementById('shop')?.scrollIntoView({ behavior: 'instant', block: 'center' })`);
  await new Promise(r => setTimeout(r, 500));
  await screenshot('ohio-preview-shop-verified.png');

  // Scroll to PPF and take screenshot
  await evaluate(`document.getElementById('services')?.scrollIntoView({ behavior: 'instant', block: 'center' })`);
  await new Promise(r => setTimeout(r, 500));
  await screenshot('ohio-preview-services-verified.png');

  // Scroll to Blog and take screenshot
  await evaluate(`document.getElementById('journal')?.scrollIntoView({ behavior: 'instant', block: 'center' })`);
  await new Promise(r => setTimeout(r, 500));
  await screenshot('ohio-preview-blog-verified.png');

  // Scroll to Footer and take screenshot
  await evaluate(`document.querySelector('footer, .client-footer')?.scrollIntoView({ behavior: 'instant', block: 'center' })`);
  await new Promise(r => setTimeout(r, 500));
  await screenshot('ohio-preview-footer-verified.png');

  ws.close();
  console.log('Inspection complete successfully!');
}

main().catch(console.error);
