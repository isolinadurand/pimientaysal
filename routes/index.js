var express = require('express');
const indexController = require('../controllers/indexController');
var router = express.Router();

/* GET home page. */
router.get('/', indexController.index);

/* get detalle de menu page */
router.get('detalle/:id', indexController.detail,)

module.exports = router;
