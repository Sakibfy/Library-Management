import { Schema, model } from 'mongoose';

const bookSchema = new Schema({
  title: { type: String, required: true, trim: true },
  author: { type: String, required: true },
  genre: {
    type: String,
    enum: ['FICTION', 'NON_FICTION', 'SCIENCE', 'HISTORY', 'BIOGRAPHY', 'FANTASY'],
    required: true,
  },
  isbn: { type: String, required: true, unique: true },
  description: { type: String },
  copies: { type: Number, required: true, min: 0 },
  available: { type: Boolean, default: true },
}, { timestamps: true });

 const Book = model('Book', bookSchema);
export default Book;