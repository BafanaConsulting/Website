import sharp from 'sharp';
import { writeFileSync } from 'fs';

// Fetch the logo from the blob URL
const url = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-O5vcVRyqIq49sCnMjPBmY39JUWedyk.png';

const response = await fetch(url);
const arrayBuffer = await response.arrayBuffer();
const inputBuffer = Buffer.from(arrayBuffer);

console.log('Fetched logo, size:', inputBuffer.length);

const image = sharp(inputBuffer);

const { data, info } = await image
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const pixels = Buffer.from(data);
const threshold = 235;

for (let i = 0; i < pixels.length; i += 4) {
  const r = pixels[i];
  const g = pixels[i + 1];
  const b = pixels[i + 2];

  if (r > threshold && g > threshold && b > threshold) {
    pixels[i + 3] = 0;
  }
}

const output = await sharp(pixels, {
  raw: {
    width: info.width,
    height: info.height,
    channels: 4,
  },
})
  .png()
  .toBuffer();

writeFileSync('/home/user/output-logo.png', output);
console.log('Logo background removed. Output saved to /home/user/output-logo.png');
