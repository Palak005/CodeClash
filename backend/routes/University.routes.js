import { Router } from "express";
import UniController from "../controllers/Uni.controller.js";
import isAuthUni from "../middlewares/isAuthUni.js";

const router = Router();

router.post("/signup", UniController.Signup);

router.post("/login", async(req, res)=>{
    res.send("Data fetched");
});

router.get("/",isAuthUni, async(req, res)=>{
    res.send("Data fetched");
});

router.get("/profile",isAuthUni, async(req, res)=>{
    res.send("Profile fetched");
});

router.get("/authen", (req, res)=>{
    res.send("Route working fine");
});

export default router;