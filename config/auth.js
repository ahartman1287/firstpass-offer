var express = require('express');
var router = express.Router();
var categories_data = require('../data/categories').data;
var categories = require('./categories')
var signup = require('./signup')



router.get('/',function(req,res){
	res.render('index.ejs', {
		title: 'Welcome to the first Offertunity Homepage!',
		message: 'Please select a category below to get more details ',
		categories: categories_data
	});

});

router.get('/category/',categories.list);
router.get('/category/:title',categories.single);
router.get('/signup/',signup.single);
router.post('/signup/', signup.suggest);

router.get('/*', function(req, res) {
  res.status(404).render('error.ejs', {message: 'Not Found'});
});

module.exports = router;
