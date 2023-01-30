const express = require('express')
const app = express()

let {people} = require('./data')

// static assets
app.use(express.static('./methods-public'))
// Parse form data
app.use(express.urlencoded({extended:false}))


app.post('/login',(req,res)=>{
  console.log(req.body)
  const {name} = req.body;
  if(name){ 
    return res.status(200).send({name:name})
  }

  res.status(401).send('  Please provide credentials') 
})



app.get('/api/people',(req,res)=>{
  res.status(200).json({success:true,data:people})
})




app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})