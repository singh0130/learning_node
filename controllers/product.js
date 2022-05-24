const path = require('path');
const rootDir = require('../util/path');

exports.getAddProduct = (req,res,next) => {
    //console.log('In another middleware!');
    //res.send('<h1>The "Add Product" Page</h1>');
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
};

exports.postAddProduct = (req,res,next) => {
    console.log(req.body);
    res.redirect('/');
};

