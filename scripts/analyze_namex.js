const sharp = require('sharp');

async function analyzeNameX() {
  const { data, info } = await sharp('C:/Users/Ansh/Downloads/Gemini_Generated_Image_sroxapsroxapsrox.png')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const xProj = new Int32Array(info.width);
  const yProj = new Int32Array(info.height);

  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const idx = (y * info.width + x) * info.channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      
      const isGrid = (r >= 38 && r <= 76 && g >= 38 && g <= 76 && b >= 38 && b <= 76 &&
                      Math.abs(r - g) <= 8 && Math.abs(g - b) <= 8 && Math.abs(r - b) <= 8);
      
      if (!isGrid) {
        xProj[x]++;
        yProj[y]++;
      }
    }
  }

  console.log('--- NameX Significant X regions (> 50 pixels per col):');
  let inRegion = false, start = 0;
  for (let x = 0; x < info.width; x++) {
    if (xProj[x] > 50 && !inRegion) { inRegion = true; start = x; }
    else if (xProj[x] <= 50 && inRegion) {
      inRegion = false;
      console.log(`  X [${start}, ${x}] (max: ${Math.max(...xProj.slice(start, x))})`);
    }
  }
  if (inRegion) console.log(`  X [${start}, ${info.width-1}]`);

  console.log('--- NameX Significant Y regions (> 50 pixels per row):');
  inRegion = false; start = 0;
  for (let y = 0; y < info.height; y++) {
    if (yProj[y] > 50 && !inRegion) { inRegion = true; start = y; }
    else if (yProj[y] <= 50 && inRegion) {
      inRegion = false;
      console.log(`  Y [${start}, ${y}] (max: ${Math.max(...yProj.slice(start, y))})`);
    }
  }
  if (inRegion) console.log(`  Y [${start}, ${info.height-1}]`);
}

analyzeNameX().catch(console.error);
