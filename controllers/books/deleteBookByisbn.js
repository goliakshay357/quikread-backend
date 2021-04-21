// Import DB model
const {Books} = require("../../models/db");
// Import status
const { httpStatus200, httpStatus500 } = require("../../status/httpStatus");

exports.deleteBookByisbn = async (req, res) => {
  try {
    const isbn = parseInt(req.params.isbn);
    const data = await Books.deleteMany({isbn: isbn});

    res.status(200).json(httpStatus200(data, "Deleted book by ISBN Number"));
  } catch(error) {
    if(error){
      res.status(500).json(httpStatus500(error))
    }
  }
}