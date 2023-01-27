const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./contents/first.txt','utf8');
const second = readFileSync('./contents/second.txt','utf8');
writeFileSync('./contents/best.txt','Suyog is best nodejs developer')
console.log(first, second);


