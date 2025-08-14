// This script uses sharp to compress images
// Install with: npm install sharp

import sharp from 'sharp';
import { statSync } from 'fs';
import { join } from 'path';

// Directory containing the images
const publicDir = join(__dirname, 'public');

// Files to compress
const imagesToCompress = [
    { input: 'hk.jpg', output: 'hk.webp', width: 1920, quality: 80 },
    { input: 'self2.jpg', output: 'self2.webp', width: 400, quality: 85 },
    // Add other large images here
];

async function compressImages() {
    for (const img of imagesToCompress) {
        const inputPath = join(publicDir, img.input);
        const outputPath = join(publicDir, img.output);

        try {
            await sharp(inputPath)
                .resize(img.width) // Resize to smaller dimensions
                .webp({ quality: img.quality }) // Convert to WebP format
                .toFile(outputPath);

            console.log(`Compressed ${img.input} to ${img.output}`);
            const originalSize = statSync(inputPath).size / (1024 * 1024);
            const newSize = statSync(outputPath).size / (1024 * 1024);
            console.log(`Original: ${originalSize.toFixed(2)}MB, New: ${newSize.toFixed(2)}MB, Saved: ${((originalSize - newSize) / originalSize * 100).toFixed(2)}%`);
        } catch (error) {
            console.error(`Error processing ${img.input}:`, error);
        }
    }
}

compressImages().catch(console.error); 