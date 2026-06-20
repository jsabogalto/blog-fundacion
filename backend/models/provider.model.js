import mongoose from "mongoose";
import { Schema } from "mongoose";

const providerSchema = new Schema(
    {
        imgUrl: {
            type: String,
        },
        name: {
            type: String,
        },
        urlProvider: {
            type: String,
        }
    }
);

export default mongoose.model("Post", postSchema);