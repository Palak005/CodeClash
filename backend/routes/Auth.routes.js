import express from "express";
import {isAuthenticated} from "../middlewares/isAuthenticated.js"
import {SignupForm, Signup, Login, LoginForm, Logout} from "../controllers/Auth.controller.js"

const AuthRouter = express.Router();
AuthRouter.get("/signup", SignupForm);

AuthRouter.get("/login", LoginForm);

AuthRouter.post("/signup", Signup);

AuthRouter.post("/login", Login);

AuthRouter.post("/logout", Logout);

AuthRouter.get("/isAuthenticated", isAuthenticated, (req, res)=>{
    res.status(200).send({success:true, message: "User is Authenticated"});
});

export default AuthRouter;