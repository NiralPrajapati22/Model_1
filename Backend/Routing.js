var http = require('http');
const fs = require('fs');

http.createServer((req, res) => {

    res.writeHead(200, {
        'Content-Type': 'text/html'
    });


    if (req.url == '/') {

        res.end("<h1>Welcome to Home Page</h1>");

    }
    else if (req.url == '/pr2') {

        fs.readFile('index.html', (error, data) => {

            if (error) {

                res.end("<h1>File Not Found</h1>");

            } else {

                res.end(data);

            }

        });

    }

    // PAGE NOT FOUND
    else {

        res.end("<h1>404 Page Not Found</h1>");

    }

}).listen(3000);

console.log("Server running on port 3000");