// Import DB model
const {Books} = require("../../models/db");
// Import status
const { httpStatus200, httpStatus500 } = require("../../status/httpStatus");

exports.getBookByisbn = async (req, res) => {
  try {
    const isbn = parseInt(req.params.isbn);
    const data = await Books.find({isbn: isbn});
    if(data.length === 0){
      return res.status(500).json(httpStatus500({message:"Number entered does not exist"}));  
    }
    return res.status(200).json(httpStatus200(data, "Getting book by ISBN Number"));
  } catch(error) {
    if(error){
      return res.status(500).json(httpStatus500(error))
    }
  }
}