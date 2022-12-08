const express = require('express');
const router = express.Router();
const userController = require('../controller/UserController');

// у нас могут быть create, find, update, delete
router.get('/', userController.view); // Отображение юзеров
router.post('/', userController.find); // Поиск по юзерам
router.get('/adduser', userController.form)
router.post('/adduser', userController.create)


router.get('/edituser/:id', userController.edit)
router.post('/edituser/:id', userController.update)

router.get('/viewuser/:id', userController.viewall)


module.exports = router;