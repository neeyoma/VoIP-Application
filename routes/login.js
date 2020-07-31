var express = require('express');
var router = express.Router();
const axios = require('axios')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { msg: 'FreeMobileLinking' });
});


router.post('/', function(req, res, next) {
  axios({
    method: 'post',
    url:'https://fmlapi.herokuapp.com/api/users/login',
    headers: {
      'cache-control': 'no-cache',
      'content-type': 'application/json'
    },
    data: {
      email: req.body.email,
      password: req.body.password
    }
  })
    .then(response => {
      console.log("login good");
      //Store token in localStorage

      // localStorage.setItem('token', JSON.stringify(response.data.id))
      res.cookie('d_token', response.data.id);
      res.redirect('/contacts');
      // res.render('dashboard', { message: response.data.id });
    })
    .catch(error => {
      res.render('login', {
        error: 'Login failed. Please try again'
      });
    });
});


module.exports = router;
