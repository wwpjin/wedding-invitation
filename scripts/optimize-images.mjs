
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGES_DIR = path.join(__dirname, '../src/images');
const MAX_WIDTH = 1920;
const QUALITY = 80;

const processImages = async () => {
    try {
        const files = fs.readdirSync(IMAGES_DIR);

        for (const file of files) {
            if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')) {
                const inputPath = path.join(IMAGES_DIR, file);
                const outputPath = path.join(IMAGES_DIR, `${path.parse(file).name}.webp`);

                console.log(`Processing ${file}...`);

                await sharp(inputPath)
                    .rotate()
                    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
                    .webp({ quality: QUALITY })
                    .toFile(outputPath);

                console.log(`Saved to ${path.basename(outputPath)}`);
            }
        }
        console.log('All images processed successfully!');
    } catch (error) {
        console.error('Error processing images:', error);
    }
};

processImages();
