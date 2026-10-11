const fs = require('fs');
const path = require('path');

(async () => {
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

  // Scroll .or-shop-card into view
  await send('Runtime.evaluate', {
    expression: `(() => {
      const card = document.querySelector('.or-shop-card');
      if (card) {
        card.scrollIntoView({ behavior: 'instant', block: 'center' });
        return { found: true, rect: card.getBoundingClientRect() };
      }
      return { found: false };
    })()`,
    returnByValue: true
  });

  await new Promise(r => setTimeout(r, 600));

  const shot = await send('Page.captureScreenshot', { format: 'png' });
  const buffer = Buffer.from(shot.data, 'base64');
  const outPath = path.join(__dirname, '..', 'outputs', 'shop-card-rendered.png');
  fs.writeFileSync(outPath, buffer);
  console.log('Saved shop card screenshot:', outPath);
  ws.close();
})();
