const {readFile, writeFile} = require('fs');

readFile('./contents/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./contents/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./contents/result-async.txt',
        `Here is the result : ${first}, ${second}`
        ,(err,result) => {
            if(err) {
                console.error(err);
                return
            }

            console.log(result);
        }
        )
    })
}) 