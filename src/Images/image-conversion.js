const sharp = require('sharp');
const fs = require('fs');
const directory = './';

fs.readdirSync(directory).forEach(file => {
  console.log(file)
  // sharp(`./${file}`)
  //   .resize(300, 300)
  //   .toFile(`./optimized${file}`)
});