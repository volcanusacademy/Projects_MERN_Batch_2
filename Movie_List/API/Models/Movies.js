import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title: { type: String, require: true },
    description: { type: String, require: true },
    releaseDate: { type: String, require: true },
    imgsrc: { type: String, require: true },
    category: { type: String, require: true },
    createdAt: { type: Date, default:Date.now },
});

export const Movies = mongoose.model('Movie',movieSchema)