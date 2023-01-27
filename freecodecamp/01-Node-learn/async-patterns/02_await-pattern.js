const {readFile, writeFile} = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);



const start = async () =>{
    try{
        const first = await readFile('./contents/first.txt','utf8');
        const second = await readFile('./contents/second.txt','utf8');
        await writeFile('./contents/result-mind-grenade.txt', `This is awesome: ${first}`)
        console.log(first, second) 
    } catch(err){
        console.log(err)
    }     
}


// const getText = (path) =>{
//     return new Promise((resolve, reject) =>{
//         readFile(path,'utf8',(err,data)=>{
//             if(err){
//                 reject(err)      
//             }
//             resolve(data)
//         })
//     })
// }
start()
// getText('./contents/first.txt')
//     .then(result => console.log(result))
//     .catch(err => console.log(err))
