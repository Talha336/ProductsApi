var express = require('express');
var router = express.Router();
const Products = require("./users")
const bodyParser = require("body-parser")

// Middle Ware
router.use(bodyParser.json());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// Create Api
router.post('/createproducts', async function(req, res, next) {
  let productsCreation = await Products.create({
    productname : req.body.productname,
    price : req.body.price,
    qaulity : req.body.qaulity,
    quantity : req.body.quantity 
  })

  res.send(productsCreation)
});


// Get Api
router.get('/getproducts', async function(req, res, next) {
  let getProducts = await Products.find()

  res.send(getProducts)
});


// Delete Api
router.delete("/deleteproducts/:id", async function(req,res){
  try {
    await Products.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(404).json({ error: 'Product not found' });
  }

})


// Update Api

router.put("/updateproducts/:id", async function(req,res){
  try {
    const updatedProduct = await Products.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedProduct);
  } catch (error) {
    res.status(404).json({ error: 'Product not found' });
  }

})




module.exports = router;
