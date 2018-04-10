var express  = require('express');
var usercontroller  = require('../controllers/userController');
var bookController  = require('../controllers/bookController');
var errorController = require('../controllers/errorController');
var router  = express.Router();

// Preflight Middleware
router.use((req, res, next) => {
  res.set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers'
  });
  // check for Preflight
  if(req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

// User Routes
router.post('/user/register', usercontroller.register); // Register a User
router.post('/user/login', usercontroller.login);  // User Login
router.put('/user/reset', usercontroller.reset);  // User Password Reset

// Book Routes
router.get('/book/list', bookController.list); // Get all Books
router.post('/book/create', bookController.create); // Insert a new Book
router.get('/book/find/:book_id', bookController.find); // Get a specific Book by Book _id

// Error Routes
// In this context, "Error" is the actual error found in the book
// it is NOT a Mongo DB Error (err)
router.get('/error/list', errorController.list); // Get all Errors
router.post('/error/create', errorController.create); // Insert a new Error
router.get('/error/find/:error_id', errorController.find); // Get a specific Error by Error _id
router.put('/error/update', errorController.update);  // Update an Error
router.get('/error/list/:user_id', errorController.findUserErrors); // Get all Errors for a specific User by _id

module.exports = router;
