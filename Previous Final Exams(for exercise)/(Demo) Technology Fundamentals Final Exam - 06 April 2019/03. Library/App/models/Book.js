const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  bookId: {
    type: mongoose.Schema.Types.ObjectId
  },
  title: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  price: {
    type: Number,
    min: 1
  }
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;