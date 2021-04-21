// Import DB model
const {Books} = require("../../models/db");
// Import status
const { httpStatus200, httpStatus500 } = require("../../status/httpStatus");

exports.checkisbn = async (req, res) => {
  try {
    const isbn = parseInt(req.params.isbn);
    const data = await Books.find({isbn: isbn});
    if(data.length === 0){
      res.status(500).json(httpStatus500({message:"Number entered does not exist"}));  
    }
    res.status(200).json(httpStatus200({status: true, data: "ISBN exists"}, "Checking ISBN Number"));
  } catch(error) {
    if(error){
      res.status(500).json(httpStatus500(error))
    }
  }
}