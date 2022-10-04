const jwt = require("jsonwebtoken");
function verifyToken(req,res,next){

    const token = req.headers["auth-token"];
    console.log(token);
    if(!token) return res.status(400).send("Token not found");

    try {
        const verified= jwt.verify(token,process.env.TOKEN_SECRET);
        //req.test=verified;
        next();
    } catch (error) {
            res.status(400).send(error)
    }


}
module.exports=verifyToken;