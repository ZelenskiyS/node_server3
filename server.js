const http = require('http');

const server = http.createServer((req, res)=> {

            if (req.url === '/') {
                res.write('Hello world');
                res.end();
            }

            if (req.url === '/database') {
                res.write(JSON.stringify([1, 2, 3]));
                res.end();
            }

});


server.listen(8000);
console.log('Server is listening on port 8000');
