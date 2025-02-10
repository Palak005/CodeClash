import University from "../models/University.js";
import generateUniToken from "../utils/generateUniToken.js";
import { genHashedPass } from "../utils/genHashedPass.js";

const Signup = async(req, res)=>{
    try{
        const {name, email, password} = req.body;

        if(!name || !email || ! password){
            return res.status(404).send("Credentials are misssing");
        };

        const uni = await University.findOne({email});
        
        if(uni){
            return res.status(404).send("Univerity already exists");
        }

        const hashedPassword = await genHashedPass(password);

        const newUni = await University.create({
            email,
            name,
            password : hashedPassword,
        });

        //Creating token
        const token = generateUniToken(newUni._id, res);

        return res.status(200).send({newUni, token});

    } catch(error){
        return res.status(404).send({error : error});
    }
};

export default {Signup};