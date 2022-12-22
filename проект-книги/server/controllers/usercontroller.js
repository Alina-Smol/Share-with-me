const db = require('../db')
// const ApiError = require("../middleware/api.errors");

class authController{
    async getYourSelf(req, res, next){
        try {
            const login = req.login
            const result = await db.query('SELECT * FROM user WHERE login=?', [login]);
            if (result[0].length === 0) {
                return res.status(400).json({message: 'Пользователя с таким именем не существует'})
            }
            const user = result[0][0]

            return res.json({user})
        }
        catch (e)
        {
            next(e);
        }

    }

    async getUser(req, res, next){
        try {
            console.log(req.params)
            const iduser = req.params.iduser
            // console.log(iduser)
            const result = await db.query('SELECT * FROM user WHERE iduser=?', [iduser]);
            if (result[0].length === 0) {
                return res.status(400).json({message: 'Пользователя с таким именем не существует'})
            }
            console.log(result[0][0])
            const user = result[0][0]

            return res.json({user})
        }
        catch (e){
            next(e);
        }
    }

}
module.exports = new authController()