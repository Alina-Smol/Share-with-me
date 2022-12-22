const db = require('../db')
const bcrypt =require('bcryptjs')
const {validationResult, header} = require('express-validator')
const salt = "$2a$07$eKzLBbPv6BYUzXGAf68OPu"
const ApiError =require('../middleware/api.errors')
const axios = require("axios");
const {Octokit} = require("octokit");


class authController{
    async registration(req, res, next){
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(400).json({message:"Ошибка при регистрации", errors})
            }
            const {name, surname, dormroom, roomnumber, connection, login, password} = req.body

            const result = await db.query('SELECT * FROM user WHERE login= ?', [login, password]);
            if (result[0].length !== 0) {
                return ApiError.BadRequest( 'Пользователь с таким именем существует')
                // return res.status(400).json({message:'Пользователь с таким именем существует'})
            }

            const hashPassword = bcrypt.hashSync(password, salt);
            console.log(hashPassword)
            const hashPass = bcrypt.hashSync(hashPassword, 7);
            const result2 = await db.query('INSERT INTO user (name, surname, dormroom, roomnumber, connection, login, password) VALUES (?,?,?,?,?,?,?)', [name, surname, dormroom, roomnumber, connection, login, hashPass])
            //console.log(result2[0])
            return res.json({message: "Пользователь успешно зарегистрирован"})
        }
        catch (e)
        {
            console.log(e)
            next(e);
            // res.status(400).json({message: 'Registration error'})
        }

    }

    async login(req, res, next){
        console.log(salt)
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(400).json({message:"Ошибка при входе", errors})
            }

            const {login, password} = req.body
            const result = await db.query('SELECT * FROM user WHERE login=?', [login]);
            if(result[0].length === 0){
                return res.status(400).json({message:'Пользователя с таким именем не существует'})
            }

            // console.log(result[0][0]['password'])

            const hash = bcrypt.hashSync(password, salt)

            const validPassword = bcrypt.compareSync(hash, result[0][0]['password'])
            // console.log(validPassword)

            if(!validPassword){
                return res.status(400).json({message: `Введен неверный пароль`})
            }
            return res.status(200).json({message:`Успешно вошли`, password: hash, login: login})
        }
        catch (e){
            console.log(e)
            next(e);
        }
    }

async githubAuth(req, res, next){
        try{
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
            }
            const {code} = req.body
            // console.log(code)
            const clientId = "4ef512fe42e1d02a2716";
            const clientSecret = '9c0f8e4b04117a0a5476d9a76463a75d73aa82bb';

            const config = {
                params: {
                    client_id: clientId,
                    client_secret: clientSecret,
                    code: code
                },
                headers: {
                    'Accept': "application/vnd.github+json"
                }
            };

            const githubUrl = 'https://github.com/login/oauth/access_token';

            const ass = await axios.post(githubUrl, null, config).then((res)=>res.data)
            console.log("ass------------------------------------------:", ass)

            const octokit = new Octokit({
                auth: ass["access_token"]
            });
            console.log('octokit',octokit)
            const assa = await octokit.request("GET /user", {})
            console.log('assa["data"]["id"]---------------------------------',assa["data"]["id"]);
            if(assa["data"]["id"]){
                const result = await db.query('select user.iduser from user where idgithub=?',
                    [assa["data"]["id"]])
                if(result[0].length !== 0){
                    const user = await db.query('SELECT * FROM user WHERE idgithub=?',
                        [assa["data"]["id"]])
                    console.log('user[0][0][login]', user[0][0]['login'])
                    return res.json({message:'Успешно вошлии', login:user[0][0]['login'], password:user[0][0]['password']})
                }
                else{
                    await db.query('insert into user (idgithub) values(?)',[assa["data"]["id"]])
                    const user1 = await db.query('SELECT * FROM user WHERE idgithub=?',
                        [assa["data"]["id"]])
                    console.log('user1', user1)
                    return res.json({user1})
                }

                return res.json({result})
            }
            throw ApiError.UnathorizedError('не авторизован через гитхаб')

        }
        catch (e){
            next(e)
        }
}
}

module.exports = new authController()