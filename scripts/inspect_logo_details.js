const sharp = require('sharp');
const fs = require('fs');

async function inspectLogo() {
  const crop = await sharp('C:/Users/Ansh/Downloads/Gemini_Generated_Image_jrl4o5jrl4o5jrl4.png')
    .extract({ left: 600, top: 400, width: 1200, height: 1000 })
    .resize(120, 60)
    .raw()
    .toBuffer({ resolveWithObject: true });

  console.log('ASCII thumbnail of Mr. Detailer logo (120x60):');
  for (let y = 0; y < crop.info.height; y++) {
    let row = '';
    for (let x = 0; x < crop.info.width; x++) {
      const idx = (y * crop.info.width + x) * crop.info.channels;
      const r = crop.data[idx], g = crop.data[idx+1], b = crop.data[idx+2];
      if (g > 100 && g > b * 1.4 && r > 60) {
        row += 'G'; // Green
      } else if (r < 35 && g < 35 && b < 35) {
        row += '#'; // Black/dark
      } else if (r > 150 && g > 150 && b > 150) {
        row += '*'; // White/light
      } else {
        row += ' '; // Background grid
      }
    }
    console.log(row);
  }
}

inspectLogo().catch(console.error);
