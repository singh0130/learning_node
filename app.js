const http = require('http');

const server=http.createServer((req,res) => {
    console.log('Mohit');
});

server.listen(4000);