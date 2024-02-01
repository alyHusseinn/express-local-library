// wiki.js - Wiki route module.

const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();

// Home page route.
// This defines a wrapper function that hides the try...catch block and the code to forward the error.
router.get("/", asyncHandler( async(req, res) => {
  res.send("Wiki home page");
}));

// About page route.
router.get("/about", function (req, res) {
  res.send("About this wiki");
});

module.exports = router;
