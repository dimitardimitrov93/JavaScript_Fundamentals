const Book = require('../models/Book');

module.exports = {
  getIndex: function (req, res) {
    getAll().then((books) => {
      return res.render('index', {books});
    })
  },
  getCreate: function (req, res) {
    res.render('create');
  },
  postCreate: function (req, res) {
    let book = req.body;
    addBook(book).then(() => {
      return res.redirect('/');
    });
  },
  getEdit: function (req, res) {
    let id = req.params.id;
    findByID(id).then((book) => {
      return res.render('edit', {book})
    });
  },
  postEdit: function (req, res) {
    let id = req.params.id;
    let newBook = req.body;
    editBook(id, newBook).then(() => {
      return res.redirect('/');
    });
  },
  getDelete: function (req, res) {
    let id = req.params.id;
    findByID(id).then((book) => {
      return res.render('delete', {book})
    });
  },
  postDelete: function (req, res) {
    let id = req.params.id;
    deleteBook(id).then(() =>{
      return res.redirect('/');
    });
  }
};

function getAll() {
  return Book.find({});
}

function addBook(book) {
  return Book.create(book);
}

function findByID(id) {
  return Book.findById(id);
}

function editBook(id, newBook) {
  return Book.findByIdAndUpdate(id, newBook);
}

function deleteBook(id) {
  return Book.findByIdAndRemove(id);
}