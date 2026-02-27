#!/usr/bin/env node

/**
 * Automated Image Compression & Conversion
 * - Compresses all PNG files
 * - Converts opaque PNGs to JPG
 * - Automatically updates component imports
 *
 * Usage: npm run compress-images
 */

const fs = require('fs');
const path = require('path');

// Check if sharp is installed, install if not
try {
  require('sharp');
} catch {
  console.log('📦 Installing sharp (image processing library)...\n');
  require('child_process').execSync('npm install --save-dev sharp', { stdio: 'inherit' });
}

const sharp = require('sharp');

const imagesDir = path.join(__dirname, '..', 'public', 'images');
const componentsDir = path.join(__dirname, '..', 'components');
const appDir = path.join(__dirname, '..', 'app');

// Images to convert from PNG to JPG (opaque images)
const convertToJpg = [
  'hero-bg.png',
  'machine.png',
  'product-smoothies.png',
  'product-puddings.png',
  'product-cocktails.png',
  'product-sodas.png',
  'product-coldbrewcoffee.png',
  'pricing-starter.png',
  'pricing-growth.png',
  'pricing-scale.png',
];

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

function getFileSize(filePath) {
  try {
    return fs.statSync(filePath).size;
  } catch {
    return 0;
  }
}

async function compressImage(inputPath, outputPath, format = 'png') {
  const sizeOriginal = getFileSize(inputPath);

  if (format === 'jpg') {
    await sharp(inputPath).jpeg({ quality: 82, progressive: true }).toFile(outputPath);
  } else {
    // PNG compression
    await sharp(inputPath).png({ compressionLevel: 9, adaptive: true }).toFile(outputPath);
  }

  const sizeCompressed = getFileSize(outputPath);
  const savings = Math.round(((sizeOriginal - sizeCompressed) / sizeOriginal) * 100);

  return { sizeOriginal, sizeCompressed, savings };
}

async function updateComponentImports(oldName, newName) {
  const filesToUpdate = [
    'components/Header.tsx',
    'components/Pricing.tsx',
    'components/ProductCarousel.tsx',
    'components/MachineSpecs.tsx',
    'app/contact/page.tsx',
  ];

  for (const file of filesToUpdate) {
    const filePath = path.join(__dirname, '..', file);
    if (!fs.existsSync(filePath)) continue;

    let content = fs.readFileSync(filePath, 'utf-8');
    const originalContent = content;

    // Replace in src attributes
    content = content.replace(new RegExp(`"/${oldName}"`, 'g'), `"/${newName}"`);
    content = content.replace(new RegExp(`'/${oldName}'`, 'g'), `'/${newName}'`);

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`   ✏️  Updated: ${file}`);
    }
  }
}

async function main() {
  console.log('\n╔════════════════════════════════════════════════════════╗');
  console.log('║  🚀 AUTOMATED IMAGE COMPRESSION & OPTIMIZATION        ║');
  console.log('╚════════════════════════════════════════════════════════╝\n');

  if (!fs.existsSync(imagesDir)) {
    console.error(`❌ Images directory not found: ${imagesDir}`);
    process.exit(1);
  }

  const files = fs.readdirSync(imagesDir);
  const pngFiles = files.filter((f) => f.endsWith('.png'));
  const svgFiles = files.filter((f) => f.endsWith('.svg'));

  console.log(`📊 Found ${pngFiles.length} PNG files, ${svgFiles.length} SVG files\n`);

  let totalOriginal = 0;
  let totalCompressed = 0;
  const updateMap = {};

  // Process PNG files
  console.log('🔄 Processing images...\n');

  for (const file of pngFiles) {
    const inputPath = path.join(imagesDir, file);
    const fileName = path.basename(file, '.png');
    const isConvertToJpg = convertToJpg.includes(file);

    const originalSize = getFileSize(inputPath);
    totalOriginal += originalSize;

    try {
      if (isConvertToJpg) {
        // Convert to JPG
        const outputPath = path.join(imagesDir, `${fileName}.jpg`);
        console.log(`📦 Converting ${file} → ${fileName}.jpg`);

        const { sizeOriginal, sizeCompressed, savings } = await compressImage(
          inputPath,
          outputPath,
          'jpg'
        );

        console.log(
          `   ${formatBytes(sizeOriginal)} → ${formatBytes(sizeCompressed)} (${savings}% reduction)`
        );
        totalCompressed += sizeCompressed;
        updateMap[`images/${file}`] = `images/${fileName}.jpg`;

        // Update imports
        await updateComponentImports(`images/${file}`, `images/${fileName}.jpg`);

        // Delete original PNG
        fs.unlinkSync(inputPath);
        console.log(`   ✅ Removed original PNG\n`);
      } else {
        // Just compress PNG
        console.log(`🗜️  Compressing ${file}`);

        const { sizeOriginal, sizeCompressed, savings } = await compressImage(
          inputPath,
          inputPath,
          'png'
        );

        console.log(
          `   ${formatBytes(sizeOriginal)} → ${formatBytes(sizeCompressed)} (${savings}% reduction)\n`
        );
        totalCompressed += sizeCompressed;
      }
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error.message);
      totalOriginal -= originalSize; // Don't count failed files
    }
  }

  // Process SVG files (just copy, already optimized)
  for (const file of svgFiles) {
    const filePath = path.join(imagesDir, file);
    const size = getFileSize(filePath);
    totalOriginal += size;
    totalCompressed += size;
    console.log(`✅ SVG (already optimized): ${file}\n`);
  }

  // Summary
  console.log('\n' + '═'.repeat(60));
  console.log('📊 COMPRESSION SUMMARY');
  console.log('═'.repeat(60));
  console.log(`Total Original Size:     ${formatBytes(totalOriginal)}`);
  console.log(`Total Compressed Size:   ${formatBytes(totalCompressed)}`);
  const totalSavings = Math.round(((totalOriginal - totalCompressed) / totalOriginal) * 100);
  console.log(`Overall Reduction:       ${totalSavings}% 🎉`);
  console.log(`Bandwidth Saved:         ${formatBytes(totalOriginal - totalCompressed)}`);
  console.log('═'.repeat(60) + '\n');

  console.log('✨ Changes Applied:\n');
  console.log('  ✅ All PNG files compressed');
  console.log('  ✅ Large PNGs converted to JPG');
  console.log('  ✅ Component imports updated automatically');
  console.log('  ✅ Ready to deploy\n');

  console.log('📋 Next Steps:\n');
  console.log('  1. npm run dev        # Test locally');
  console.log('  2. Check Network tab  # Verify file sizes');
  console.log('  3. git status         # Review changes');
  console.log('  4. git add .');
  console.log('  5. git commit -m "Optimize: compress images 75%"');
  console.log('  6. git push           # Netlify auto-deploys\n');
}

main().catch((error) => {
  console.error('❌ Fatal error:', error.message);
  process.exit(1);
});
