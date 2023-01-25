const {readFile} = require('fs');

const getText = (path) =>{
    return new Promise((resolve, reject) =>{
        readFile(path,'utf8',(err,data)=>{
            if(err){
                reject(err)
            }
            resolve(data)
        })
    })
}

getText('./contents/first.txt')
    .then(result => console.log(result))
    .catch(err => console.log(err))