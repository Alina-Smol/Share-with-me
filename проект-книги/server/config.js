module.exports = {
    secret: "Secret_KEY_Random"
}

module.exports =function (req, res, next){
    try{
        const authorizationHeader = req.headers.authorization;
        console.log(authorizationHeader)
    }
    catch (e)
    {
        return e
    }
}