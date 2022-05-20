//const http = require('http');
//const routes=require('./routes');
const { application } = require('express');
const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//console.log(routes.someText);
const app= express();

app.use(bodyParser.urlencoded({extended:false}));

/*
app.use((req,res,next) => {
    console.log('In the middleware!');
    next(); //Allows the request to continue to the next middleware in line
});
*/

/*
app.use('/', (req,res,next) => {
    console.log('This always runs!');
    next();
});
*/

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req,res,next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

//const server=http.createServer(app);

//server.listen(3000);
app.listen(3000);