var express  = require('express');
var errorController = require('../controllers/errorController');
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

router.get('/list', errorController.list); 
router.post('/create', errorController.create); 
router.post('/find', errorController.find); 

module.exports = router;
