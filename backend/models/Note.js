import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true,
    },
    content:{
        type: String,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
}, {
    timestamps:true,
});

export const Note = mongoose.model("Note", noteSchema);
