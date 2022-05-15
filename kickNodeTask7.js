const http=require('http');

const server=http.createServer((req,res) => {
    const url=req.url;
    //const method=req.method;

    if(url==='/home')
    {
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>My First home Page</title></head>');
        res.write('<body><h1>Welcome home</h1></body>')
        res.write('</html>');
        return res.end();
    }

    if(url==='/about')
    {
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>My First about Page</title></head>');
        res.write('<body><h1>Welcome to About Us page</h1></body>')
        res.write('</html>');
        return res.end();
    }

    if(url==='/node')
    {
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>My First node Page</title></head>');
        res.write('<body><h1>Welcome to my Node Js project</h1></body>')
        res.write('</html>');
        return res.end();
    }
});

server.listen(3000);