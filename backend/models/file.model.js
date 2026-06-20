import mongoose from "mongoose";
import { Schema } from "mongoose";

const fileSchema = new Schema(
  {
    url: {
      type: String,
    },
    title: {
      type: String,
    },
    desc: {
      type: String, // opcional, útil para el alt de la imagen
    },
  },
  { timestamps: true }
);

export default mongoose.model("File", fileSchema);