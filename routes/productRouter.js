const express = require('express');
const router = express.Router();
const productController = require("../controllers/productController"); // we import the productController from the controllers

//This has been transfered to the controller
// router.get('/', (req, res) => {
//     res.send('Welcome to products Route');
// });

//we use the function from the controller
router.get('/', productController.getProducts);
module.exports = router;