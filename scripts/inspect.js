async function inspect(url) {
  const res = await fetch(url);
  const text = await res.text();
  console.log(`\n=== INSPECTING ${url} ===`);
  const labels = [...text.matchAll(/class="or-nav-label">([^<]+)<\/span>/g)].map(m => m[1]);
  console.log('Rail Nav items (' + labels.length + '):', labels);
  
  const popupHeadings = [...text.matchAll(/class="or-nav-popup-heading">([^<]+)<\/span>/g)].map(m => m[1]);
  console.log('Popup Headings (' + popupHeadings.length + '):', popupHeadings);

  const themeMatch = text.match(/<div class="[^"]*ohio-rebuild[^"]*"[^>]*>/);
  console.log('Rebuild Root:', themeMatch ? themeMatch[0] : 'not found');

  const btnMatch = text.match(/<button class="[^"]*ohio-theme-control[^"]*"[^>]*>([\s\S]*?)<\/button>/);
  console.log('Theme Control Button:', btnMatch ? btnMatch[0] : 'not found');
}

async function run() {
  await inspect('http://localhost:3000/ohio-preview');
  await inspect('http://localhost:3000/ohio');
}
run();
