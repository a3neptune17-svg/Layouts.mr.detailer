const sharp = require('sharp');
const fs = require('fs');

async function checkLogoColors() {
  const { data, info } = await sharp('C:/Users/Ansh/Downloads/Gemini_Generated_Image_jrl4o5jrl4o5jrl4.png')
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Sample points inside the letters:
  // In our ASCII preview earlier, letters were at Y: 750 to 950, X: 700 to 1600.
  let letterPixels = [];
  let greenPixels = [];
  let bgPixels = [];

  for (let y = 460; y < 1330; y += 2) {
    for (let x = 630; x < 1720; x += 2) {
      const idx = (y * info.width + x) * info.channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      
      if (g > 120 && g > b * 1.4 && r > 70) {
        greenPixels.push({ r, g, b });
      } else if (r < 30 && g < 30 && b < 30) {
        letterPixels.push({ r, g, b });
      } else if (Math.abs(r - g) <= 8 && Math.abs(g - b) <= 8 && r >= 38 && r <= 76) {
        bgPixels.push({ r, g, b });
      }
    }
  }

  console.log(`Green pixels in logo: ${greenPixels.length}`);
  if (greenPixels.length > 0) {
    const avgG = {
      r: Math.round(greenPixels.reduce((a,c) => a + c.r, 0) / greenPixels.length),
      g: Math.round(greenPixels.reduce((a,c) => a + c.g, 0) / greenPixels.length),
      b: Math.round(greenPixels.reduce((a,c) => a + c.b, 0) / greenPixels.length),
    };
    console.log('Avg Green color:', avgG);
  }

  console.log(`Letter pixels in logo: ${letterPixels.length}`);
  if (letterPixels.length > 0) {
    const avgL = {
      r: Math.round(letterPixels.reduce((a,c) => a + c.r, 0) / letterPixels.length),
      g: Math.round(letterPixels.reduce((a,c) => a + c.g, 0) / letterPixels.length),
      b: Math.round(letterPixels.reduce((a,c) => a + c.b, 0) / letterPixels.length),
    };
    console.log('Avg Letter color:', avgL);
  }

  console.log(`Background grid pixels in logo bounding box: ${bgPixels.length}`);
}

checkLogoColors().catch(console.error);
