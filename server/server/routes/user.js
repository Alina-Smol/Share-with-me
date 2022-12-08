const express = require('express');
const router = express.Router();
const userController = require('../controller/UserController');

// у нас могут быть create, find, update, delete

router.get('/viewuser/:id', userController.viewall)


module.exports = router;
