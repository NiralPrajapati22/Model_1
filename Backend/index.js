const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "content-type": "text/html"
    })
    fs.readFile('./index.html',(error,data)=>{
        if(error){
            res.writeHead(404);
            res.write('File not found');
        } else {
            res.write(data);
        }
        
    })
})

server.listen(3000, () => {
    console.log("Server is running at http://loalhost:3000")
})