const {createReadStream} = require('fs');

const stream = createReadStream('./contents/big.txt', {highWaterMark: 90000, encoding: 'utf8'});


// default 64kb
// last buffer - remainder
// highWaterMark: control size
// highWaterMark: 90000 - 90kb


stream.on('data', (result) => {
    console.log(result);
})

stream.on('error', (err) => {
    console.log(err);
})
