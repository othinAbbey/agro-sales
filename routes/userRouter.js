const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController"); // we import the userController from the controllers 


//This is not needed anymore here since its written in controllers
// router.get('/', (req, res) => {
//     // res.send('Welcome to user Route'); 
// });

//we use the function from the controller
router.get('/', userController.getUsers);

module.exports = router;