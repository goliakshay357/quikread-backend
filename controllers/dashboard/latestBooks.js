// Import DB model
const { Books } = require("../../models/db");
// Import status
const { httpStatus200, httpStatus500 } = require("../../status/httpStatus");

exports.latestBooks = async(req, res) => {
    try {
        // Getting the top 10 latest upload
        const data = await Books.find().sort({ created_on: -1 }).limit(10);
        return res.status(200).json(httpStatus200(data, "Getting latest top 10 uploaded books"));
    } catch (error) {
        if (error) {
            return res.status(500).json(httpStatus500(error))
        }
    }
}