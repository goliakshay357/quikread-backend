// Import DB model
const { Books } = require("../../models/db");
// Import status
const { httpStatus200, httpStatus500 } = require("../../status/httpStatus");

exports.searchField = async(req, res) => {
  try {
    const data = await Books.find({},{isbn:1, '_id':1, 'book_title':1, 'author_name':1})
    console.log(data, data.length);
    return res.status(200).json(httpStatus200(data, "Getting search feed data"));
  }catch(error){
    return res.status(500).json(httpStatus500(error))
  }
}