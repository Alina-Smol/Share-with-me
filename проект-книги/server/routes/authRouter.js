const Router = require('express')
const router = new Router()
const controller =require('../controllers/authcontroller')
const controllerbook = require('../controllers/bookcontroller')
const controlleruser = require('../controllers/usercontroller')

const {check} = require('express-validator')
const authMiddleware = require('../middleware/auth-middleware')


router.post('/login/github', controller.githubAuth)
router.post('/registration',
    check('name', "Не может быть пустым").notEmpty(),
    check('surname', "Не может быть пустым").notEmpty(),
    check('roomnumber', "Не может быть пустым").notEmpty(),
    check('dormroom', "Не может быть пустым").notEmpty(),
    check('connection', "Не может быть пустым").notEmpty(),
    check('login', "Не может быть пустым").notEmpty(),
    check('password', "Должен содержать 8 символов").isLength({min: 8, max:8}),
    controller.registration)
router.post('/login',
    check('login', "Не может быть пустым").notEmpty(),
    check('password', "Не может быть пустым" +
        "").notEmpty(),
    controller.login)
router.get('/getuser/:iduser', authMiddleware,controlleruser.getUser)

router.post('/findbook',authMiddleware, controllerbook.findBook)
router.post('/createfindbook', authMiddleware, controllerbook.createfindBook)

router.get('/books', authMiddleware, controllerbook.getAllBooks)
router.get('/mybooks', authMiddleware, controllerbook.getMyBooks)
router.get('/user', authMiddleware, controlleruser.getYourSelf)

router.post('/bookrequestbutton', authMiddleware,controllerbook.bookRequestButton)
router.get('/bookrequest', authMiddleware, controllerbook.bookRequest)
router.get('/bookrequest2', authMiddleware, controllerbook.bookRequest2)
router.post('/cancellationreservation', authMiddleware, controllerbook.cancellationReservation)
router.post('/bookingconfirmation', authMiddleware, controllerbook.bookingConfirmation)
router.get('/returnedbook', authMiddleware, controllerbook.returnBook)
router.post('/deletebook', authMiddleware, controllerbook.deleteBook)
router.post('/createbook', authMiddleware, controllerbook.createBook)
router.get('/aboutbook/:idbookinstance', authMiddleware,controllerbook.aboutBook)

module.exports =router


