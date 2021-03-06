// Import DB model
const { Books } = require("../../models/db");
// Import status
const { httpStatus200, httpStatus500 } = require("../../status/httpStatus");

exports.customCategory = async(req, res) => {
    try {
        const book_category = req.params.book_category;
        
        const data = await Books.find({
            book_category: new RegExp("^" +book_category, "i")
        })
        return res.status(200).json(httpStatus200(data, "Getting latest top 10 uploaded books"));
    } catch (error) {
        if (error) {
            return res.status(500).json(httpStatus500(error))
        }
    }
}