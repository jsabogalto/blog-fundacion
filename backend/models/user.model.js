import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema(
        {
        clerkUserId: {
            type: String,
            required: true,
            unique: true
        },
        username: {
            type: String,
            required: true,
            unique: false
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        img: {
            type: String,
            required: true,
            unique: true
        },
        linkedIn: { 
            type: String, 
            default: "" 
        },
        profile: {
            type: String,
            default: "Miembro del equipo de la Fundacion Reciclando Unidos."
        } 
    }
    , { timestamps: true }
);

export default mongoose.model("User", userSchema);