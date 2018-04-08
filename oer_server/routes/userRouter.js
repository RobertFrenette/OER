var express  = require('express');
var usercontroller = require('../controllers/userController');
var router   = express.Router();

// Preflight Middleware
router.use((req, res, next) => {
  res.set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers'
  });
  // check for Preflight
  if(req.method === 'OPTIONS'){
    return res.status(200).end();
  }
  next();
});

router.post('/register', usercontroller.register); 
router.post('/login', usercontroller.login); 

module.exports = router;
