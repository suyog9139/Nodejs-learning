const http  = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('Welcome to home page')
        res.end()
    }
    if(req.url === '/about'){
        res.write('Welcome to about page')
        res.end()
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">Back to home</a>
    `)
})

server.listen(5000)