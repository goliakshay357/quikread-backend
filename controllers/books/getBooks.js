// Import DB model
const { Books } = require("../../models/db");
// Import status
const { httpStatus200, httpStatus500 } = require("../../status/httpStatus");

exports.getBooks = async(req, res) => {
    try {
        return res.status(200).json(httpStatus200({ message: "Hello" }, "Getting books"));
    } catch (error) {
        if (error) {
            return res.status(500).json(httpStatus500(error))
        }
    }
}