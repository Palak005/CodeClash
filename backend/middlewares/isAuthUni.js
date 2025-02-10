import jwt from "jsonwebtoken";
import University from "../models/University.js";

const isAuthUni = async(req, res, next)=>{
    try{
        const {UniToken} = req.cookies;

        if(!UniToken){
            return res.status(400).send({message: "Unversity not Authenticated"});
        };

        const decode = jwt.verify(UniToken, process.env.SECRET_KEY);

        const uni = await University.findById(decode.uniId);
        if(!uni){
            return res.status(400).send("University Not Authorized : Login First");
        }

        req.university = uni;
        
        next();
    }catch(error){
        return res.status(400).send({error});
    }
};

export default isAuthUni;