const express = require('express');
const router = express.Router();
const categoryController = require("../controllers/categoryController"); // we import the categoryController from the controllers

//this has moved to the controllers
// router.get('/', (req, res) => {
//     res.send('Welcome to categories Route');
// });

//we use the function from the controller
router.get('/', categoryController.getCategory);

module.exports = router;