const express = require("express");
const router = express.Router();

// Controllers
const {getBooks} = require("../controllers/books/getBooks")

//Middlewares


// ............................. BOOKS APIS .............................. //
router.get("/books", getBooks);


module.exports = router;