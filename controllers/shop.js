const path = require('path');
const rootDir = require('../util/path');

exports.getShop = (req,res,next) => {
    //console.log('In another middleware!');
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
};

