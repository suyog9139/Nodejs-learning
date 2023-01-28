const http = require('http')

const {readFileSync} = require('fs');

// get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')



const server = http.createServer((req, res) => {

    const url = req.url;
    if(url === '/'){
        console.log('request event')
        res.writeHead(200,{'Content-Type': 'text/html'})
        res.write(homePage)
        res.end()
    }
    // styles
    else if(url === '/styles.css'){
        res.writeHead(200,{'Content-Type': 'text/css'})
        res.write(homeStyles)
        res.end()
    }
    // image
    else if(url === '/logo.svg'){
        res.writeHead(200,{'Content-Type': 'image/svg'})
        res.write(homeImage)
        res.end()
    }
    else if(url === '/browser-app.js'){
        res.writeHead(200,{'Content-Type': 'text/javascript'})
        res.write(homeLogic)
        res.end()
    }
    else{
        res.writeHead(404,{'Content-Type': 'text/html'})
        res.write('<h>404 Page </h> ')
        res.end()
    }
})

server.listen(5000) 