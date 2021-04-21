const express = require("express");
const router = express.Router();

// Controllers
const {getBooks} = require("../controllers/books/getBooks")
const {bookEntry} = require("../controllers/books/bookEntry")
const {getBookByisbn} = require("../controllers/books/getBookByisbn")
const {deleteBookByisbn} = require("../controllers/books/deleteBookByisbn")
const {checkisbn} = require("../controllers/books/checkisbn")
//Middlewares

// ............................. BOOKS APIS .............................. //
router.get("/books", getBooks);
router.post("/books/book-entry", bookEntry)
router.get("/books/get-by-isbn/:isbn", getBookByisbn)
router.delete("/books/delete-by-isbn/:isbn", deleteBookByisbn)
router.get("/books/check-isbn/:isbn", checkisbn);
module.exports = router;