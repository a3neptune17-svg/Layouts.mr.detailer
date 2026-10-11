const sharp = require('sharp');

async function inspectGrid() {
  const { data, info } = await sharp('C:/Users/Ansh/Downloads/Gemini_Generated_Image_jrl4o5jrl4o5jrl4.png')
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Let's print out 20x20 pixels from (100, 100)
  console.log('Patch from (100,100):');
  for (let y = 100; y < 120; y++) {
    let row = '';
    for (let x = 100; x < 120; x++) {
      const idx = (y * info.width + x) * info.channels;
      const v = Math.round((data[idx] + data[idx+1] + data[idx+2]) / 3);
      row += (v > 56 ? '.' : '#');
    }
    console.log(row);
  }
}

inspectGrid().catch(console.error);
