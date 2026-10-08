async function main() {
  const res = await fetch('https://ohio.clbthemes.com/demo21/homedemo21-elementor/');
  const text = await res.text();
  const cssUrls = [...text.matchAll(/href="([^"]+\.css[^"]*)"/g)].map(m => m[1]);
  console.log('CSS URLs count:', cssUrls.length);
  for (const url of cssUrls) {
    try {
      const r = await fetch(url);
      const c = await r.text();
      if (c.includes('.hamburger-button') || c.includes('.hamburger')) {
        console.log('Matched url:', url);
        const idx = c.indexOf('.hamburger');
        console.log(c.substring(idx, idx + 600));
        break;
      }
    } catch(e) {}
  }
}
main();
