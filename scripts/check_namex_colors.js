const sharp = require('sharp');

async function checkNameXColors() {
  const { data, info } = await sharp('C:/Users/Ansh/Downloads/Gemini_Generated_Image_sroxapsroxapsrox.png')
    .raw()
    .toBuffer({ resolveWithObject: true });

  let letterPixels = [];
  let otherPixels = [];

  for (let y = 430; y < 1110; y += 2) {
    for (let x = 410; x < 2350; x += 2) {
      const idx = (y * info.width + x) * info.channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      
      if (r < 30 && g < 30 && b < 30) {
        letterPixels.push({ r, g, b });
      } else if (!(Math.abs(r - g) <= 8 && Math.abs(g - b) <= 8 && r >= 38 && r <= 76)) {
        otherPixels.push({ r, g, b });
      }
    }
  }

  console.log(`Letter pixels in NameX: ${letterPixels.length}`);
  if (letterPixels.length > 0) {
    const avgL = {
      r: Math.round(letterPixels.reduce((a,c) => a + c.r, 0) / letterPixels.length),
      g: Math.round(letterPixels.reduce((a,c) => a + c.g, 0) / letterPixels.length),
      b: Math.round(letterPixels.reduce((a,c) => a + c.b, 0) / letterPixels.length),
    };
    console.log('Avg Letter color in NameX:', avgL);
  }
  console.log(`Other non-grid pixels in NameX: ${otherPixels.length}`);
}

checkNameXColors().catch(console.error);
