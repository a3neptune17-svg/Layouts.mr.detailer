const fs = require('fs');
const path = require('path');

async function checkPages() {
  const res = await fetch('http://127.0.0.1:9222/json/list');
  const pages = await res.json();
  const page = pages.find(p => p.url && p.url.includes('ohio-preview') && p.type === 'page');
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise(r => ws.onopen = r);

  let id = 1;
  function send(method, params = {}) {
    return new Promise((resolve) => {
      const msgId = id++;
      const handler = (e) => {
        const msg = JSON.parse(e.data);
        if (msg.id === msgId) {
          ws.removeEventListener('message', handler);
          resolve(msg.result);
        }
      };
      ws.addEventListener('message', handler);
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });
  }

  // 1. Navigate to /ohio-preview/explore/ppf
  console.log('Navigating to PPF inner page (/ohio-preview/explore/ppf)...');
  await send('Page.navigate', { url: 'http://localhost:3000/ohio-preview/explore/ppf' });
  await new Promise(r => setTimeout(r, 2000));

  let shot = await send('Page.captureScreenshot', { format: 'png' });
  let buffer = Buffer.from(shot.data, 'base64');
  let outPath = path.join(__dirname, '..', 'outputs', 'inner-ppf-page.png');
  fs.writeFileSync(outPath, buffer);
  console.log('Saved:', outPath);

  // 2. Return to /ohio-preview
  await send('Page.navigate', { url: 'http://localhost:3000/ohio-preview' });
  await new Promise(r => setTimeout(r, 1500));

  ws.close();
}

checkPages().catch(console.error);
