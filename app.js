//const http = require('http');
//const routes=require('./routes');
const { application } = require('express');
const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');
const rootDir = require('./util/path');
const contactusRoutes = require('./routes/contactus');
const successRoutes = require('./routes/success');

//console.log(routes.someText);
const app= express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));
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
app.use(contactusRoutes);
app.use(successRoutes);

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

//const server=http.createServer(app);

//server.listen(3000);
app.listen(3000);