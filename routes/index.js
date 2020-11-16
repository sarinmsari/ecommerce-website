var express = require('express');
var router = express.Router();

/* GET home page. */
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
  res.render('index', { products , admin:false });
});

module.exports = router;
