const fs = require('fs');
const sharp = require('sharp');

async function analyzeAssets() {
  // Let's inspect NameX
  console.log('--- Analyzing Gemini_Generated_Image_sroxapsroxapsrox.png (NameX) ---');
  const imgNamex = sharp('C:/Users/Ansh/Downloads/Gemini_Generated_Image_sroxapsroxapsrox.png');
  const { data: dn, info: inamex } = await imgNamex.raw().toBuffer({ resolveWithObject: true });
  console.log('NameX dimensions:', inamex.width, inamex.height);

  // Check corner pixels for NameX
  for (let y = 0; y < 5; y++) {
    let r = [];
    for (let x = 0; x < 5; x++) {
      const idx = (y * inamex.width + x) * inamex.channels;
      r.push(`${dn[idx]},${dn[idx+1]},${dn[idx+2]}`);
    }
    console.log('NameX top-left:', r.join(' '));
  }

  // Find non-background in NameX
  // Check background color:
  const bgR = dn[0], bgG = dn[1], bgB = dn[2];
  console.log('NameX (0,0) color:', bgR, bgG, bgB);

  let nMinX = inamex.width, nMaxX = 0, nMinY = inamex.height, nMaxY = 0;
  for (let y = 0; y < inamex.height; y += 2) {
    for (let x = 0; x < inamex.width; x += 2) {
      const idx = (y * inamex.width + x) * inamex.channels;
      const r = dn[idx], g = dn[idx+1], b = dn[idx+2];
      const diff = Math.abs(r - bgR) + Math.abs(g - bgG) + Math.abs(b - bgB);
      if (diff > 50) {
        if (x < nMinX) nMinX = x;
        if (x > nMaxX) nMaxX = x;
        if (y < nMinY) nMinY = y;
        if (y > nMaxY) nMaxY = y;
      }
    }
  }
  console.log('NameX content box:', { nMinX, nMaxX, nMinY, nMaxY });

  // Detailer logo analysis: what colors are inside the center area?
  console.log('--- Analyzing Gemini_Generated_Image_jrl4o5jrl4o5jrl4.png content ---');
  const img1 = sharp('C:/Users/Ansh/Downloads/Gemini_Generated_Image_jrl4o5jrl4o5jrl4.png');
  const { data: d1, info: i1 } = await img1.raw().toBuffer({ resolveWithObject: true });

  // Find color histogram of the central region
  const colors = {};
  for (let y = 300; y < 1500; y += 4) {
    for (let x = 600; x < 1800; x += 4) {
      const idx = (y * i1.width + x) * i1.channels;
      const r = Math.round(d1[idx] / 16) * 16;
      const g = Math.round(d1[idx+1] / 16) * 16;
      const b = Math.round(d1[idx+2] / 16) * 16;
      const key = `${r},${g},${b}`;
      colors[key] = (colors[key] || 0) + 1;
    }
  }
  const sortedColors = Object.entries(colors).sort((a,b) => b[1] - a[1]).slice(0, 20);
  console.log('Top 20 colors in center of Detailer:', sortedColors);
}

analyzeAssets().catch(console.error);
