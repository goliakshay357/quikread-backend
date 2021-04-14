// http://localhost:3000/api/v1/books/book-entry

// Import DB model
const {Books} = require("../../models/db");
// Import status
const { httpStatus200, httpStatus500 } = require("../../status/httpStatus");

exports.bookEntry = async (req, res) => {
try{
  // Create book entry
  // const book = await new Books({

  // })
  // await book.save();

  return res.status(200).json({
    success: true,
    message: req.body,
  });

} catch(error){
  if(error){
    res.status(500).json(httpStatus500(error));
  }
}
}
