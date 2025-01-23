import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

export const isAuthenticated = async(req, res, next)=>{
    try{
        //Checking if token exists or not
        const token = req.cookies.token;

        if(!token){
            return res.send({message: "Route Unauthorized : Login First"});
        }

        //Decoding the token to acces the user info
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        //Finding user
        const user = await User.findById(decoded.userID);

        if(!user){
            return res.send({success: false, message: "User not Unauthorized : Login First"});
        }

        //Storing user info 
        req.user = user;

        next();
    } catch(err){
        return res.status(500).send(err);
    }
}