const sharp = require('sharp');

async function findLogoElements() {
  const { data, info } = await sharp('C:/Users/Ansh/Downloads/Gemini_Generated_Image_jrl4o5jrl4o5jrl4.png')
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Look for pixels that are NOT the gray grid:
  // The gray grid has pixels between 40 and 75 where |r-g| < 6 and |g-b| < 6.
  // Foreground is either black (r,g,b < 35), green (g > 100 && g > b * 1.5), white/sparkle, etc.
  
  let logoPixels = [];
  let minX = info.width, maxX = 0, minY = info.height, maxY = 0;
  
  // We can scan and find clusters
  for (let y = 0; y < info.height; y += 4) {
    for (let x = 0; x < info.width; x += 4) {
      const idx = (y * info.width + x) * info.channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      
      const isGrid = (r >= 38 && r <= 76 && g >= 38 && g <= 76 && b >= 38 && b <= 76 &&
                      Math.abs(r - g) <= 8 && Math.abs(g - b) <= 8 && Math.abs(r - b) <= 8);
      
      if (!isGrid) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
        logoPixels.push({ x, y, r, g, b });
      }
    }
  }

  console.log(`Non-grid pixels found: ${logoPixels.length}`);
  console.log(`Bounding box: x: [${minX}, ${maxX}], y: [${minY}, ${maxY}]`);

  // Let's check bottom-right area (typical Gemini watermark location)
  // Check pixels where x > info.width * 0.8 and y > info.height * 0.8
  const brPixels = logoPixels.filter(p => p.x > info.width * 0.8 && p.y > info.height * 0.8);
  console.log(`Bottom right pixels (watermark?): ${brPixels.length}`);
  if (brPixels.length > 0) {
    const brMinX = Math.min(...brPixels.map(p => p.x));
    const brMaxX = Math.max(...brPixels.map(p => p.x));
    const brMinY = Math.min(...brPixels.map(p => p.y));
    const brMaxY = Math.max(...brPixels.map(p => p.y));
    console.log(`Bottom right box: x: [${brMinX}, ${brMaxX}], y: [${brMinY}, ${brMaxY}]`);
  }

  // Check main logo without bottom right
  const mainPixels = logoPixels.filter(p => !(p.x > info.width * 0.8 && p.y > info.height * 0.8));
  if (mainPixels.length > 0) {
    const mMinX = Math.min(...mainPixels.map(p => p.x));
    const mMaxX = Math.max(...mainPixels.map(p => p.x));
    const mMinY = Math.min(...mainPixels.map(p => p.y));
    const mMaxY = Math.max(...mainPixels.map(p => p.y));
    console.log(`Main logo box: x: [${mMinX}, ${mMaxX}], y: [${mMinY}, ${mMaxY}]`);
    console.log(`Width: ${mMaxX - mMinX}, Height: ${mMaxY - mMinY}`);
  }
}

findLogoElements().catch(console.error);
