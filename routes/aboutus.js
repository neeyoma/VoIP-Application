var express = require('express');
var router = express.Router();
const axios = require('axios')
var request = require("request");

/* GET about us page. */
router.get('/', function (req, res, next) {
    res.render('aboutus');

})

    module.exports = router;