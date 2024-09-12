// Needed Resources 
const express = require("express")
const router = new express.Router() 
const utilities = require("../utilities/")
const accountController = require("../controllers/accountController")

/*  **********************************
*  GET Routes
* ********************************* */

// Route to login view
router.get("/login",
  utilities.handleErrors(accountController.buildLogin)
  );


  module.exports = router;