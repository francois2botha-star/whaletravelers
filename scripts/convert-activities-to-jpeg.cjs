#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const galleryDir = path.join(__dirname, '..', 'src', 'assets', 'activities gallery');

const sourceExtensions = new Set(['.jfif', '.jpeg', '.jpg']);

async function convertAll() {
  const files = fs.readdirSync(galleryDir);
  const tasks = [];

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!sourceExtensions.has(ext)) continue;

    const fullPath = path.join(galleryDir, file);
    const baseName = path.basename(file, ext);
    const outputName = `${baseName}.jpeg`;
    const outputPath = path.join(galleryDir, outputName);

    if (outputPath === fullPath) continue;

    tasks.push(
      sharp(fullPath)
        .jpeg({ quality: 90 })
        .toFile(outputPath)
        .then(() => {
          console.log(`✓ ${file} -> ${outputName}`);
        })
        .catch((err) => {
          console.error(`✗ ${file}: ${err.message}`);
        })
    );
  }

  await Promise.all(tasks);
  console.log('Done converting images.');
}

convertAll();
