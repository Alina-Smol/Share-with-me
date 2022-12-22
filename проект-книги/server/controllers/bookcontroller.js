const db = require('../db')
const ApiError =require('../middleware/api.errors')
const {auth} = require("mysql/lib/protocol/Auth");
const {logger} = require("sequelize/lib/utils/logger");


class bookController {
    async getAllBooks(req, res, next) {
        try {
            const login = req.login
            const result = await db.query('SELECT * FROM user WHERE login=?', [login]);
            if (result[0].length === 0) {
                return res.status(400).json({message: 'Пользователя с таким именем не существует'})
            }

            const informationbookuser = await db.query('\n' +
                'SELECT book.name AS namebook, author.name AS authorname, author.surname AS authorsurname, bookinstance.idbookinstance, bookperiod, bookinstance.iduser,  user.name AS username, user.surname AS usersurname FROM bookinstance INNER JOIN book ON book.idbook = bookinstance.idbook AND waitingforconfirmation = 1 AND bookinstance.iduser <> ? INNER JOIN book_has_author ON book.idbook = book_has_author.idbook INNER JOIN author ON author.idauthor = book_has_author.idauthor INNER JOIN user ON bookinstance.iduser = user.iduser;',
                [result[0][0]['iduser']])

            if (!informationbookuser) {
                return ApiError.BadRequest('Ничего не нашли')
            }

            const books = informationbookuser[0]
            return res.json({books})
        } catch (e) {
            next(e)
        }

    }

    async getMyBooks(req, res, next){
        try {
            const login = req.login
            const result = await db.query('SELECT * FROM user WHERE login=?', [login]);
            if (result[0].length === 0) {
                return res.status(400).json({message: 'Пользователя с таким именем не существует'})
            }
            const informationbook = await db.query('SELECT book.name AS namebook, author.name AS authorname, author.surname AS authorsurname, bookinstance.idbookinstance, bookperiod, bookinstance.iduser, waitingforconfirmation FROM bookinstance INNER JOIN book ON book.idbook = bookinstance.idbook  AND bookinstance.iduser =? INNER JOIN book_has_author ON book.idbook = book_has_author.idbook INNER JOIN author ON author.idauthor = book_has_author.idauthor INNER JOIN user ON bookinstance.iduser = user.iduser',
                [result[0][0]['iduser']])

            if (!informationbook) {
                return ApiError.BadRequest('Ничего не нашли')
            }


            const books = informationbook[0]

            return res.json({books})
        }
        catch (e){
            next(e)
        }
    }

    async findBook(req, res, next){
        try{
            const {search} = req.body
            const login = req.login
            const result = await db.query('SELECT * FROM user WHERE login=?', [login]);
            if (result[0].length === 0) {
                return res.status(400).json({message: 'Пользователя с таким именем не существует'})
            }
            //console.log(result[0][0]['iduser'])

            //console.log(req.body)
            const books = await db.query('SELECT book.name AS namebook, author.name AS authorname, author.surname AS authorsurname, bookinstance.idbookinstance, bookperiod, bookinstance.iduser,  user.name AS username, user.surname AS usersurname FROM bookinstance INNER JOIN book ON book.idbook = bookinstance.idbook AND waitingforconfirmation = 1 AND bookinstance.iduser <> ? INNER JOIN book_has_author ON book.idbook = book_has_author.idbook INNER JOIN author ON author.idauthor = book_has_author.idauthor AND book.name LIKE ? INNER JOIN user ON bookinstance.iduser = user.iduser',
                [result[0][0]['iduser'] , '%' + search + '%'])
            //console.log(books[0])
            if(!books[0]){

            }
            return res.status(200).json({books: books[0]})
        }
        catch (e){
            next(e)
        }
    }

    async createfindBook(req, res, next){
        try{
            const {search} = req.body
            const login = req.login
            const result = await db.query('SELECT * FROM user WHERE login=?', [login]);
            if (result[0].length === 0) {
                return res.status(400).json({message: 'Пользователя с таким именем не существует'})
            }
            const books = await db.query('SELECT book.idbook AS idbook, book.name AS namebook, author.name AS authorname, author.surname AS authorsurname FROM book INNER JOIN book_has_author ON book.idbook = book_has_author.idbook INNER JOIN author ON author.idauthor = book_has_author.idauthor AND book.name LIKE ?;',
                ['%' + search + '%'])
            //console.log(books[0])
            if(!books[0]){

            }
            return res.status(200).json({books: books[0]})
        }
        catch (e){
            next(e)
        }
    }

    async bookRequestButton(req, res, next){
        try{
            const login = req.login
            const user = await db.query('SELECT iduser FROM user WHERE login=?', [login]);
            if (user[0].length === 0) {
                return res.status(400).json({message: 'Пользователя с таким именем не существует'})
            }
            const inform = req.body

            const booked = db.query('INSERT INTO booked SET idbookinstance=?, iduser=?, databooked=CURRENT_DATE(), status=0;',
                [ inform['idbookinstance'],user[0][0]['iduser']])

            if(!booked){
                return res.status(400).json({message: 'Не получилось забронировать книгу'})
            }
            db.query('UPDATE bookinstance SET waitingforconfirmation = 2 where iduser =? and idbookinstance =?',
                [inform['iduser'], inform['idbookinstance']])

            return res.status(200).json({message:'Получилось запросить книгу'})
        }
        catch (e){
            next(e)
        }
    }

    async bookRequest(req, res, next){
        try{
            const login = req.login
            const user = await db.query('SELECT iduser FROM user WHERE login=?', [login]);
            // console.log("user", user[0][0]['iduser'])
            if (user[0].length === 0) {
                return res.status(400).json({message: 'Пользователя с таким именем не существует'})
            }

            const books = await db.query('select booked.idbooked, booked.databooked, booked.idbookinstance, booked.iduser AS iduser, booked.status, bookinstance.idbook, bookinstance.waitingforconfirmation, bookinstance.bookperiod, bookinstance.iduser, book.idbook, user.name  AS username, user.surname AS usersurname, book.name as namebook, book_has_author.idbook, author.name as authorname, author.surname as authorsurname from booked inner join bookinstance on booked.idbookinstance = bookinstance.idbookinstance and bookinstance.waitingforconfirmation = 2 and bookinstance.iduser = ? inner join book on bookinstance.idbook = book.idbook inner join user on booked.iduser = user.iduser inner join book_has_author on book.idbook = book_has_author.idbook inner join author on book_has_author.idbook = author.idauthor;',
                [user[0][0]['iduser']])
            // console.log( 'book', books[0][0].length)
            if(books[0].length === 0){
                return res.status(400).json({message:'Ничего не нашли'})
            }
            return res.status(200).json({books:books[0]})
        }
        catch (e)
        {
            next(e)
        }
    }

    async bookRequest2(req, res, next){
        try{
            const login = req.login
            const user = await db.query('SELECT iduser FROM user WHERE login=?', [login]);
            if (user[0].length === 0) {
                return res.status(400).json({message: 'Пользователя с таким именем не существует'})
            }

            const books = await db.query('select booked.idbooked, booked.databooked, booked.idbookinstance, booked.iduser AS iduser, booked.status, bookinstance.idbook, bookinstance.waitingforconfirmation, bookinstance.bookperiod, bookinstance.iduser AS idowner, book.idbook, user.name AS username, user.surname AS usersurname, book.name as namebook, book_has_author.idbook, author.name as authorname, author.surname as authorsurname from booked inner join bookinstance on booked.idbookinstance = bookinstance.idbookinstance and bookinstance.waitingforconfirmation = 3 and bookinstance.iduser = ? inner join book on bookinstance.idbook = book.idbook inner join user on booked.iduser = user.iduser inner join book_has_author on book.idbook = book_has_author.idbook inner join author on book_has_author.idbook = author.idauthor;',
                [user[0][0]['iduser']])

            if(!books){
                return res.status(400).json({message:'Ничего не нашли'})
            }
            return res.status(200).json({books:books[0]})
        }
        catch (e)
        {
            next(e)
        }
    }

    async cancellationReservation(req,res, next){
        try{
            const login = req.login
            const user = await db.query('SELECT iduser FROM user WHERE login=?',
                [login]);
            const inform = req.body
            if (user[0].length === 0) {
                return res.status(400).json({message: 'Пользователя с таким именем не существует'})
            }
            await db.query('UPDATE bookinstance SET bookinstance.waitingforconfirmation=1 WHERE bookinstance.idbookinstance=?',
                [inform['idbookinstance']])
            await db.query('DELETE FROM booked WHERE booked.idbooked =?',
                [inform['idbooked']])
            return res.status(200).json({message:'Получилось отменитьь запрос на книгу'})
        }
        catch (e)
        {
            next(e)
        }
    }

    async bookingConfirmation (req, res, next){
        try{
            // const login = req.login
            // const user = await db.query('SELECT iduser FROM user WHERE login=?',
            //     [login]);
            const inform = req.body
            db.query('UPDATE booked SET databooked = DATE_ADD(CURRENT_DATE, INTERVAL ? DAY) WHERE booked.idbooked=?',
                [inform['bookperiod'], inform['idbooked']])
            db.query('UPDATE bookinstance SET waitingforconfirmation=3 WHERE idbookinstance=?',
                [inform['idbookinstance']])
            return res.status(200).json({message:'Вы подтвердили книгу'})
        }
        catch (e){
            next(e)
        }
    }

    async returnBook (req,res, next){
        try {
            const login = req.login
            const user = await db.query('SELECT iduser FROM user WHERE login=?',
                [login]);
            if (user[0].length === 0) {
                return res.status(400).json({message: 'Пользователя с таким именем не существует'})
            }
            console.log(user[0][0]['iduser'])
            const books = await db.query("select booked.idbooked,date_format(booked.databooked, '%d/%m/%y'), booked.idbookinstance, booked.status, bookinstance.iduser ,bookinstance.waitingforconfirmation, bookinstance.bookperiod, book.idbook, user.name, user.surname, book.name as namebook, book_has_author.idbook, author.name as authorname, author.surname as authorsurname from booked inner join bookinstance on booked.idbookinstance = bookinstance.idbookinstance and (bookinstance.waitingforconfirmation = 3 or bookinstance.waitingforconfirmation = 2) and booked.iduser =? inner join book on bookinstance.idbook = book.idbook inner join user on bookinstance.iduser = user.iduser inner join book_has_author on book.idbook = book_has_author.idbook inner join author on book_has_author.idbook = author.idauthor;",
                [user[0][0]['iduser']])
            console.log(books[0])

            if(books[0].length === 0){
                return res.status(400).json({message:'Ничего не нашли'})
            }
            // if(books[0].length == 0){
            //     return res.status(200).json({message:"Пусто..."})
            // }
            return res.status(200).json({books:books[0]})
        }
        catch (e){
            next(e)
        }
    }

    async deleteBook (req,res, next){
        try{
            // const login = req.login
            const {waitingforconfirmation, idbookinstance} = req.body
            console.log(waitingforconfirmation)
            console.log(idbookinstance)
            if(waitingforconfirmation === 3 || waitingforconfirmation === 2){
                res.status(400).json({message:"Вы не можете удалить книгу. Она забронирована или ожидает подтверждения"})
            }
            console.log(idbookinstance)

            await db.query('DELETE FROM bookinstance WHERE idbookinstance = ? and waitingforconfirmation = 1;',
                [idbookinstance])

            return res.status(200).json({message:'Вы успешно удалили книгу'})



        }
        catch (e){
            next(e)
        }
    }
    async createBook (req, res, next){
        try{
            const login = req.login
            const user = await db.query('SELECT iduser FROM user WHERE login=?',
                [login]);
            const {idbook, bookperiod, review} = req.body
            db.query('INSERT INTO bookinstance(idbook, iduser, bookperiod, review, waitingforconfirmation) VALUES (?, ?, ?, ?, 1);',
                [idbook,user[0][0]['iduser'], bookperiod, review])

            return res.json({message: "Книга успешно зарегистрирована"})

        }
        catch (e){
            next(e)
        }
    }

    async aboutBook(req, res, next){
        try{
            const idbookinstance = req.params.idbookinstance
            const book = await db.query( "SELECT book.name AS namebook, review, bookinstance.idbookinstance, bookperiod, bookinstance.iduser, language, GROUP_CONCAT(author.name, ' ', author.surname SEPARATOR ', ') as book_author, (SELECT GROUP_CONCAT(genre SEPARATOR ', ') as allgenre FROM book INNER JOIN bookinstance ON book.idbook = bookinstance.idbook AND bookinstance.idbookinstance = ? INNER JOIN genre_has_book ON book.idbook = genre_has_book.idbook INNER JOIN genre ON genre_has_book.idgenre = genre.idgenre group by book.name) AS allgenre FROM bookinstance INNER JOIN book ON book.idbook = bookinstance.idbook AND idbookinstance = ? INNER JOIN book_has_author ON book.idbook = book_has_author.idbook INNER JOIN author ON author.idauthor = book_has_author.idauthor INNER JOIN language ON book.idlanguage = language.idlanguage group by namebook;",
                [idbookinstance, idbookinstance])
            if(book[0].length === 0){
                return res.status(400).json({message:'Ничего не нашли'})
            }
            return res.status(200).json({book: book[0]})
        }
        catch (e){
            next(e)
        }
    }

}

module.exports = new bookController();