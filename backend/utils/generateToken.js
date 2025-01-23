import jwt from "jsonwebtoken";

export const generateToken = (user, res)=>{
    const token = jwt.sign({ userID:user._id}, 
        process.env.SECRET_KEY, 
        {expiresIn:"2d"}
    );

    res.cookie("token", token, {
        maxAge: 2*24*60*60*1000,
        secure: false,
        httpOnly: true,
    });
}