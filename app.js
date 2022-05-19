//const http = require('http');
//const routes=require('./routes');
const express = require('express');

//console.log(routes.someText);
const app= express();

app.use((req,res,next) => {
    console.log('In the middleware!');
    next(); //Allows the request to continue to the next middleware in line
});

app.use((req,res,next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>');
});

//const server=http.createServer(app);

//server.listen(3000);
app.listen(3000);