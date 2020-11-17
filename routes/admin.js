var express = require('express');
var router = express.Router();
var productHelper=require('../helpers/productHelper')


/* GET users listing. */
router.get('/', function(req, res, next) {
  productHelper.getAllProducts().then((products)=>{
    console.log(products);
    res.render('admin/viewProducts',{admin:true, products});
  })
});
router.get('/addProduct',(req,res,next)=>{
  res.render('admin/addProduct',{admin:true});
})
router.post('/addProduct',(req,res,next)=>{
  
  productHelper.addProduct(req.body,(id)=>{
    let image=req.files.Image
    image.mv('./public/productImages/'+id+'.jpg',(err,done)=>{
      if(!err){
        res.render("admin/addProduct")
      }else{
        console.log(err);
      }
    })
  })
})

module.exports = router;
