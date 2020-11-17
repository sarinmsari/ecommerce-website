var express = require('express');
var router = express.Router();
var productHelper=require('../helpers/productHelper')


/* GET home page. */
router.get('/', function(req, res, next) {
  productHelper.getAllProducts().then((products)=>{
    console.log(products);
    res.render('user/viewProduct',{admin:true, products});
  })

});

module.exports = router;
