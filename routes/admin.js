var express = require('express');
var router = express.Router();
var productHelper=require('../helpers/productHelper')


/* GET users listing. */
router.get('/', function(req, res, next) {
  let products=[{
    name:"iPhone 12",
    category:"Mobile Phone",
    description:"Brand new phone from apple",
    image:"https://bgr.com/wp-content/uploads/2020/03/iphone-12-pro-concept.jpg?quality=70&strip=all&w=1200"
  },{
    name:"Jaguar i Pase",
    category:"Car",
    description:"Electric car from jaguar",
    image:"https://www.lloydmotorgroup.com/ImageLibrary/NewsArticles/2018-Q4-Jaguar-I-PACE-EV-of-the-year-Thumbnail.jpg"
  },{
    name:"Mercides EQC",
    category:"Car",
    description:"Electric car from Mercides Benz",
    image:"https://media.caradvice.com.au/image/private/q_auto/v1574371658/r3ssxmos9gcjo2ljaxpg.jpg"
  },{
    name:"Pixel 4a",
    category:"Mobile Phone",
    description:"Brand new phone from google",
    image:"https://cdn.pocket-lint.com/r/s/1200x/assets/images/151144-phones-news-renders-show-what-the-google-pixel-4a-could-look-like-image1-u5sxowtng2.jpg"
  }
  ]
  res.render('admin/viewProducts',{admin:true, products});
});
router.get('/addProduct',(req,res,next)=>{
  res.render('admin/addProduct',{admin:true});
})
router.post('/addProduct',(req,res,next)=>{
  console.log(req.body);
  console.log(req.files.Image);
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
