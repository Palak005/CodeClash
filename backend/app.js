import express, { json, urlencoded } from "express";
import dotenv from "dotenv";
import AuthRouter from "./routes/Auth.routes.js";
import { connectDB } from "./utils/connectDB.js";
import NotesRouter from "./routes/Notes.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/auth", AuthRouter);
app.use("/notes", NotesRouter);

app.listen(PORT, ()=>{
    connectDB();
    console.log("Server started on Port : ", PORT);
})