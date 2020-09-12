const express = require("express")
,     router = express.Router()
,     indexController = require('../controllers/index.controller');

router.get('/', indexController.getIndexPage);

module.exports = router;