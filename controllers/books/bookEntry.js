// http://localhost:3000/api/v1/books/book-entry

// Import DB model
const {Books} = require("../../models/db");
// Import status
const { httpStatus200, httpStatus500 } = require("../../status/httpStatus");

exports.bookEntry = async (req, res) => {
try{
  // Create book entry
  console.log(req.body, "Body");
  const book = await new Books({
    isbn: req.body.isbn,
    book_title: req.body.book_title,
    author_name: req.body.author_name,
    small_discription: req.body.small_discription,
    image_URL: req.body.image_URL,
    book_category: req.body.book_category,
    youtube_links: req.body.youtube_links,
    podcast_mp3: req.body.podcast_mp3,
    download_links: req.body.download_links,
    approved: false,
    likes: 0,
    amazon_purchase: req.body.amazon_purchase,
  })
  await book.save();
  console.log(book);
  return res.status(200).json({
    success: true,
    message: book,
  });

} catch(error){
  if(error){
    res.status(500).json(httpStatus500(error));
  }
}
}
