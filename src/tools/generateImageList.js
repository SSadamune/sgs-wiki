const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../../public/images/general');
const outputFile = path.join(__dirname, '../data/generalCardImages.json');

fs.readdir(imagesDir, (err, files) => {
    if (err) {
        return console.error('无法扫描目录:', err);
    }

    const images = files.filter(file => /\.(png|jpg|jpeg|gif)$/.test(file));

    fs.writeFileSync(outputFile, JSON.stringify(images, null, 2));
    console.log('图片列表生成:', images);
});
