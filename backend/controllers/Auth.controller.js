import {User} from "../models/User.js";
import { generateToken } from "../utils/generateToken.js";
import { genHashedPass } from "../utils/genHashedPass.js";
import bcrypt from "bcryptjs";

const SignupForm = (req, res)=>{
    res.send("Rendering Signup Form");
};

const LoginForm = (req, res)=>{
    res.send("Rendering Login Form");
};

const Signup = async(req, res)=>{
    try{
        const {username, email, password} = req.body;

        //Checking if all entries are there or not
        if(!username || !email || !password){
           return res.send({success: false, message:"Incomplete Entries"});
        }
    
        //Finding is user already exists or not
        const findUser = await User.findOne({email});
    
        if(findUser){
            return res.send({success: false, message:"User Already Exists"});
        }

        //Generation of hashed password
        const hashedPassword = await genHashedPass(password);
    
        const newUser = await User.create({ //User creation
            username,
            email,
            password : hashedPassword,
        })

        //Token generation  
        generateToken(newUser, res);

        //Signing up successfully
        res.status(201).send({ success: true, message:"Signed up successfully", user:newUser});
    } catch(err){
        res.send(err);
    }
};

const Login = async(req, res)=> {
    try{
        const {email, password} = req.body;

        //Checking if all entries are there or not
        if(!email || !password){
           return res.send({ success: false, message:"Incomplete entries"});
        }
    
        //Finding is user already exists or not
        const findUser = await User.findOne({email});
    
        if(!findUser){
            return res.send({ success: false, message:"User Doesn't Exists"});
        }


        //Password Validation
        const comparePassword = await bcrypt.compare(password, findUser.password);
    
        if(!comparePassword){
            return res.send({ success: false, message:"Wrong Password"});
        }

        //Token generation  
        generateToken(findUser, res);

        //Successfully logged in 
        res.status(200).send({ success: true, message:"User logged in Successfully", user:findUser});
    } catch(err){
        res.send(err);
    }
};

const Logout = (req, res)=>{
    try{
        //Deleting cookie : can use clearCookie("token")
        res.cookie("token", "", {
            maxAge: 0
        });

        return res.status(200).send({success: true, message: "logged out successfully"});
    }
    catch(err){
        return res.send(err);
    }
}

export {SignupForm, Signup, Login, LoginForm, Logout};