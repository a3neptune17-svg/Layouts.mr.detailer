const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processLogos() {
  console.log('--- Processing Mr. Detailer Logo ---');
  const detailerSrc = 'C:/Users/Ansh/Downloads/Gemini_Generated_Image_jrl4o5jrl4o5jrl4.png';
  const { data: d1, info: i1 } = await sharp(detailerSrc).raw().toBuffer({ resolveWithObject: true });

  // Find exact tight bounding box for logo elements (excluding outer borders and watermark)
  // We know logo is roughly x: [630, 1720], y: [460, 1325]
  let minX = i1.width, maxX = 0, minY = i1.height, maxY = 0;
  for (let y = 440; y < 1340; y++) {
    for (let x = 620; x < 1740; x++) {
      const idx = (y * i1.width + x) * i1.channels;
      const r = d1[idx], g = d1[idx+1], b = d1[idx+2];
      
      const isGreen = (g > 110 && g > b * 1.35 && r > 60);
      const isLetter = (r < 32 && g < 32 && b < 32);
      
      if (isGreen || isLetter) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  // Add 16px padding
  minX = Math.max(0, minX - 16);
  maxX = Math.min(i1.width - 1, maxX + 16);
  minY = Math.max(0, minY - 16);
  maxY = Math.min(i1.height - 1, maxY + 16);

  const cropW = maxX - minX + 1;
  const cropH = maxY - minY + 1;
  console.log('Detailer cropped bbox:', { minX, maxX, minY, maxY, cropW, cropH });

  // Create buffers for light and dark versions
  const lightBuf = Buffer.alloc(cropW * cropH * 4);
  const darkBuf = Buffer.alloc(cropW * cropH * 4);

  for (let cy = 0; cy < cropH; cy++) {
    for (let cx = 0; cx < cropW; cx++) {
      const srcX = minX + cx;
      const srcY = minY + cy;
      const srcIdx = (srcY * i1.width + srcX) * i1.channels;
      const outIdx = (cy * cropW + cx) * 4;

      const r = d1[srcIdx];
      const g = d1[srcIdx+1];
      const b = d1[srcIdx+2];

      const isGreen = (g > 105 && g > b * 1.3 && r > 55);
      const isLetter = (r < 32 && g < 32 && b < 32);

      // Check distance from gray grid (typical grid is around 50..70 neutral gray)
      const avgGray = (r + g + b) / 3;
      const grayDev = Math.max(Math.abs(r - avgGray), Math.abs(g - avgGray), Math.abs(b - avgGray));
      const isGrid = (avgGray >= 35 && avgGray <= 78 && grayDev <= 10);

      if (isGreen) {
        // Authentic green for both
        lightBuf[outIdx] = r;
        lightBuf[outIdx+1] = g;
        lightBuf[outIdx+2] = b;
        lightBuf[outIdx+3] = 255;

        darkBuf[outIdx] = r;
        darkBuf[outIdx+1] = g;
        darkBuf[outIdx+2] = b;
        darkBuf[outIdx+3] = 255;
      } else if (isLetter) {
        // Solid black letter for light mode
        lightBuf[outIdx] = 20;
        lightBuf[outIdx+1] = 20;
        lightBuf[outIdx+2] = 20;
        lightBuf[outIdx+3] = 255;

        // Solid clean ivory/white letter for dark mode
        darkBuf[outIdx] = 244;
        darkBuf[outIdx+1] = 243;
        darkBuf[outIdx+2] = 238;
        darkBuf[outIdx+3] = 255;
      } else if (!isGrid) {
        // Anti-aliased transition edge
        // Distance from dark
        const darkDist = Math.hypot(r, g, b);
        if (darkDist < 60) {
          // Antialiased letter edge
          const alpha = Math.min(255, Math.max(0, Math.round((1 - (darkDist - 30) / 30) * 255)));
          lightBuf[outIdx] = 20;
          lightBuf[outIdx+1] = 20;
          lightBuf[outIdx+2] = 20;
          lightBuf[outIdx+3] = alpha;

          darkBuf[outIdx] = 244;
          darkBuf[outIdx+1] = 243;
          darkBuf[outIdx+2] = 238;
          darkBuf[outIdx+3] = alpha;
        } else if (g > b * 1.2 && g > 80) {
          // Antialiased green edge
          const alpha = Math.min(255, Math.max(0, Math.round(((g - 70) / 40) * 255)));
          lightBuf[outIdx] = r;
          lightBuf[outIdx+1] = g;
          lightBuf[outIdx+2] = b;
          lightBuf[outIdx+3] = alpha;

          darkBuf[outIdx] = r;
          darkBuf[outIdx+1] = g;
          darkBuf[outIdx+2] = b;
          darkBuf[outIdx+3] = alpha;
        } else {
          // Background transparent
          lightBuf[outIdx+3] = 0;
          darkBuf[outIdx+3] = 0;
        }
      } else {
        // Grid background transparent
        lightBuf[outIdx+3] = 0;
        darkBuf[outIdx+3] = 0;
      }
    }
  }

  await sharp(lightBuf, { raw: { width: cropW, height: cropH, channels: 4 } })
    .png()
    .toFile('public/images/mrdetailer-logo-light.png');

  await sharp(darkBuf, { raw: { width: cropW, height: cropH, channels: 4 } })
    .png()
    .toFile('public/images/mrdetailer-logo-dark.png');

  console.log('Saved mrdetailer-logo-light.png and mrdetailer-logo-dark.png');

  // Also process NameX
  console.log('--- Processing NameX Logo ---');
  const namexSrc = 'C:/Users/Ansh/Downloads/Gemini_Generated_Image_sroxapsroxapsrox.png';
  const { data: dn, info: inamex } = await sharp(namexSrc).raw().toBuffer({ resolveWithObject: true });

  let nxMinX = inamex.width, nxMaxX = 0, nxMinY = inamex.height, nxMaxY = 0;
  for (let y = 400; y < 1150; y++) {
    for (let x = 400; x < 2360; x++) {
      const idx = (y * inamex.width + x) * inamex.channels;
      const r = dn[idx], g = dn[idx+1], b = dn[idx+2];
      if (r < 32 && g < 32 && b < 32) {
        if (x < nxMinX) nxMinX = x;
        if (x > nxMaxX) nxMaxX = x;
        if (y < nxMinY) nxMinY = y;
        if (y > nxMaxY) nxMaxY = y;
      }
    }
  }

  nxMinX = Math.max(0, nxMinX - 16);
  nxMaxX = Math.min(inamex.width - 1, nxMaxX + 16);
  nxMinY = Math.max(0, nxMinY - 16);
  nxMaxY = Math.min(inamex.height - 1, nxMaxY + 16);

  const ncropW = nxMaxX - nxMinX + 1;
  const ncropH = nxMaxY - nxMinY + 1;
  console.log('NameX cropped bbox:', { nxMinX, nxMaxX, nxMinY, nxMaxY, ncropW, ncropH });

  const nLightBuf = Buffer.alloc(ncropW * ncropH * 4);
  const nDarkBuf = Buffer.alloc(ncropW * ncropH * 4);

  for (let cy = 0; cy < ncropH; cy++) {
    for (let cx = 0; cx < ncropW; cx++) {
      const srcX = nxMinX + cx;
      const srcY = nxMinY + cy;
      const srcIdx = (srcY * inamex.width + srcX) * inamex.channels;
      const outIdx = (cy * ncropW + cx) * 4;

      const r = dn[srcIdx];
      const g = dn[srcIdx+1];
      const b = dn[srcIdx+2];

      const isLetter = (r < 32 && g < 32 && b < 32);
      const avgGray = (r + g + b) / 3;
      const grayDev = Math.max(Math.abs(r - avgGray), Math.abs(g - avgGray), Math.abs(b - avgGray));
      const isGrid = (avgGray >= 35 && avgGray <= 78 && grayDev <= 10);

      if (isLetter) {
        nLightBuf[outIdx] = 20;
        nLightBuf[outIdx+1] = 20;
        nLightBuf[outIdx+2] = 20;
        nLightBuf[outIdx+3] = 255;

        nDarkBuf[outIdx] = 244;
        nDarkBuf[outIdx+1] = 243;
        nDarkBuf[outIdx+2] = 238;
        nDarkBuf[outIdx+3] = 255;
      } else if (!isGrid) {
        const darkDist = Math.hypot(r, g, b);
        if (darkDist < 60) {
          const alpha = Math.min(255, Math.max(0, Math.round((1 - (darkDist - 30) / 30) * 255)));
          nLightBuf[outIdx] = 20;
          nLightBuf[outIdx+1] = 20;
          nLightBuf[outIdx+2] = 20;
          nLightBuf[outIdx+3] = alpha;

          nDarkBuf[outIdx] = 244;
          nDarkBuf[outIdx+1] = 243;
          nDarkBuf[outIdx+2] = 238;
          nDarkBuf[outIdx+3] = alpha;
        } else {
          nLightBuf[outIdx+3] = 0;
          nDarkBuf[outIdx+3] = 0;
        }
      } else {
        nLightBuf[outIdx+3] = 0;
        nDarkBuf[outIdx+3] = 0;
      }
    }
  }

  await sharp(nLightBuf, { raw: { width: ncropW, height: ncropH, channels: 4 } })
    .png()
    .toFile('public/images/namex-logo-light.png');

  await sharp(nDarkBuf, { raw: { width: ncropW, height: ncropH, channels: 4 } })
    .png()
    .toFile('public/images/namex-logo-dark.png');

  console.log('Saved namex-logo-light.png and namex-logo-dark.png');
}

processLogos().catch(console.error);
