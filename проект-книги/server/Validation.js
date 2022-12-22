const {check} =require('express-validator');

exports.registration = [
    check('name', 'Введите имя').not().isEmpty(),
    check('surname', 'Введите фамилию.').not().isEmpty(),
    check('password', 'Password must be 8 characters').not().isEmpty().isLength({min:8, max: 8}),
    // check('login', 'Введите email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
]

exports.login = [
    // check('password', 'Password must be 8 characters').not().isEmpty().isLength({min:8, max: 8}),
    // check('login', 'Введите email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
]

