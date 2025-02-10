import mongoose from "mongoose";

const uniSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        minLength: 5,
        maxLength: 30,
    },
    password:{
        type: String,
        required: true,
        select: false,
    },
});

const University = mongoose.model("University", uniSchema);

export default University;