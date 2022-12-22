const ApiError =require('../middleware/api.errors')

module.exports = function (req, res, next){
    try{
        // console.log(req.headers);
        const authorizationHeader = req.headers.authorization;
        // console.log("authorizationHeader:", authorizationHeader)
        if(!authorizationHeader){
            return next(ApiError.UnathorizedError("9"));
        }
        const login = authorizationHeader.split(' ')[1];
        // console.log("в функции login:", login)

        if(!login){
            return next(ApiError.UnathorizedError("15"));
        }
        //console.log('req.login:', req.login)
        req.login = login;
        next();
        //return req.login

    }
    catch (e){
        return next(ApiError.UnathorizedError())
    }
};