const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/products",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})


const CreateProducts = mongoose.Schema({
  productname : String,
  price : Number,
  qaulity : String,
  quantity : Number
})


module.exports = mongoose.model("product",CreateProducts)