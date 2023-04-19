const jwt = require('jsonwebtoken')

exports.cookieJwtAuth = (req, res, next) =>{
    const token = req.cookies.token
    try{
        // The important part
        const user = jwt.verify(token, process.env.JWT_TOKEN)
        req.user = user
        next()
    }catch(err){
        res.clearCookie('token');
        return res.redirect('/login')
    }
}