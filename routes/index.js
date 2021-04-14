const express = require("express");
const router = express.Router();

// Controllers
const {getBooks} = require("../controllers/books/getBooks")
const {bookEntry} = require("../controllers/books/bookEntry")
//Middlewares


// ............................. BOOKS APIS .............................. //
router.get("/books", getBooks);
router.post("/books/book-entry", bookEntry)

module.exports = router;