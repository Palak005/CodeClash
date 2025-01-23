import { Note } from "../models/Note.js";

const getAllNotes = async(req, res)=>{
    try{

        const notes = await Note.find({});
        res.status(200).send({message: "All Notes found", notes: notes});

    } catch(error){
        return res.send(err);
    }
}

const createNote = async(req, res)=>{
    try{
        const {title} = req.body;

        if(!title){
            return res.status(400).send({message: "Title is Missing"});
        }

        const newNote = await Note.create({title, user: req.user});
        return res.status(200).send({message: "New Note created", note: newNote});

    } catch(err){
        return res.send(err);
    }
}

const editNote = async(req, res)=>{
    try{
        const noteId = req.params.id;
        const note = await Note.findById(noteId);

        //Checking if the note exist
        if(!note){
            return res.status(400).send({message: "Note not found with such ID"});
        }

        //Checking for the title
        const {title} = req.body;

        if(!title){
            return res.status(400).send({message: "Title is Missing"});
        }

        //Checking if user is Authorized or not
        if(!note.user._id.equals(req.user._id)){
            return res.status(400).send({message: "Unauthorized to edit the note"});
        }

        const updatedNote = await Note.findByIdAndUpdate(noteId, {title}, {new: true});

        return res.status(200).send({message: "Note edited", note: updatedNote});

    } catch(err){
        return res.send(err);
    }
}

const deleteNote = async(req, res)=>{
    try{
        const noteId = req.params.id;
        const note = await Note.findById(noteId);

        //Checking if the note exist
        if(!note){
            return res.status(400).send({message: "Note not found with such ID"});
        }

        //Checking if user is Authorized or not
        if(!note.user._id.equals(req.user._id)){
            return res.status(400).send({message: "Unauthorized to delete the note"});
        }

        const deletedNote = await Note.findByIdAndDelete(noteId);

        return res.status(200).send({message: "Note deleted", note: deletedNote});

    } catch(err){
        return res.send(err);
    }
};

const getUserNotes = async(req, res)=>{
    try{
        const userId = req.user._id;

        //Finding notes list and if needed : populate('user', 'username email');
        const notes = await Note.find({ user:userId });

        //Checking if the note exist
        if(!notes){
            return res.status(400).send({message: "No notes written by the user"});
        }

        return res.status(200).send({message: "Successfully found Individual's Notes List", List : notes});

    } catch(err){
        return res.send(err);
    }
};

export {createNote, editNote, deleteNote, getAllNotes, getUserNotes};