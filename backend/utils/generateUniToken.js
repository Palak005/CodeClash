import jwt from "jsonwebtoken";

const generateUniToken = (uniId, res)=>{
    const token = jwt.sign({uniId}, 
        process.env.SECRET_KEY,
        {expiresIn: "2d"}
    );

    res.cookie("UniToken", token, {
        maxAge: 2*24*60*60*1000,
        secure: false,
        httpOnly: true,
    });

    return token;
};
 
export default generateUniToken;