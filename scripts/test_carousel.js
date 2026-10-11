(async () => {
  const res = await fetch('http://127.0.0.1:9222/json/list');
  const pages = await res.json();
  const page = pages.find(p => p.url && p.url.includes('ohio-preview') && p.type === 'page');
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise(r => ws.onopen = r);
  ws.send(JSON.stringify({
    id: 1,
    method: 'Runtime.evaluate',
    params: {
      expression: '(() => { const t = document.querySelector(".client-carousel-track"); const i = document.querySelector(".client-carousel-indicator"); return { trackHeight: t ? window.getComputedStyle(t).height : null, indicatorWidth: i ? window.getComputedStyle(i).width : null, indicatorHeight: i ? window.getComputedStyle(i).height : null, parent: t?.closest(".or-story-card") ? true : false }; })()',
      returnByValue: true
    }
  }));
  ws.onmessage = (e) => {
    const data = JSON.parse(e.data);
    if (data.id === 1) {
      console.log('Carousel DOM evaluation:', data.result.result.value);
      process.exit(0);
    }
  };
})();
