// const router = require("express").Router();
// const bookRoutes = require("./api");

// // Book routes
// router.use("/books", bookRoutes);

// module.exports = router;
const express = require('express');
const path = require('path');
const router = express.Router();

module.exports = router;


  router.get("/", function(req, res) {
    res.render("../views/home.jade");
  });


