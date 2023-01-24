const path = require('path');

console.log(path.sep);

const filePath = path.join('/contents/','subfolder', 'text.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);


const absolutePath = path.resolve(__dirname);
console.log(absolutePath);
const absolute = path.resolve(__dirname, 'contents', 'subfolder', 'text.txt');
console.log(absolute);