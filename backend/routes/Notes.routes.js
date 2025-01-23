import express from "express";
import { createNote, editNote, deleteNote, getAllNotes, getUserNotes } from "../controllers/Notes.controller.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";

const NotesRouter = express.Router();

NotesRouter.get("/", isAuthenticated, getUserNotes);
NotesRouter.get("/all", getAllNotes);
NotesRouter.post("/create" , isAuthenticated, createNote);
NotesRouter.put("/edit/:id", isAuthenticated, editNote);
NotesRouter.delete("/delete/:id", isAuthenticated, deleteNote);

export default NotesRouter;
