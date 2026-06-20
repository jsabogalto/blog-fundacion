import mongoose from "mongoose";
import { Schema } from "mongoose";

const donorSchema = new Schema(
  {
    img: {
      type: String,
    },
    url: {
      type: String,
    },
    name: {
      type: String, // opcional, útil para el alt de la imagen
    },
  },
  { timestamps: true }
);

export default mongoose.model("Donor", donorSchema);