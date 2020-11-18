var express = require('express');
const { response } = require('../app');
var router = express.Router();
var productHelper=require('../helpers/productHelper')


/* GET users listing. */
router.get('/', function(req, res, next) {
  productHelper.getAllProducts().then((products)=>{
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
router.get('/editProduct',(req,res,next)=>{
  
})
router.get('/deleteProduct/:id',(req,res,next)=>{
  let proId=req.params.id
  console.log(proId);
  productHelper.deleteProduct(proId).then((response)=>{
    res.redirect('/admin/')
  })
})


module.exports = router;
