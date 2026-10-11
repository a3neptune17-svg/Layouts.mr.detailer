const sharp = require('sharp');

async function inspectNameX() {
  const crop = await sharp('C:/Users/Ansh/Downloads/Gemini_Generated_Image_sroxapsroxapsrox.png')
    .extract({ left: 400, top: 400, width: 1950, height: 750 })
    .resize(120, 45)
    .raw()
    .toBuffer({ resolveWithObject: true });

  console.log('ASCII thumbnail of NameX logo (120x45):');
  for (let y = 0; y < crop.info.height; y++) {
    let row = '';
    for (let x = 0; x < crop.info.width; x++) {
      const idx = (y * crop.info.width + x) * crop.info.channels;
      const r = crop.data[idx], g = crop.data[idx+1], b = crop.data[idx+2];
      if (r < 35 && g < 35 && b < 35) {
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

inspectNameX().catch(console.error);
