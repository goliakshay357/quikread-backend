// Import DB model
const { Books } = require("../../models/db");
// Import status
const { httpStatus200, httpStatus500 } = require("../../status/httpStatus");

exports.customCategoryLimit = async(req, res) => {
    try {
        const book_category = req.params.book_category;
        const data = await Books.find({
            book_category: new RegExp("^" +book_category, "i")
        })
        console.log(data.length)
        if(data.length < 6){
            return res.status(200).json(httpStatus200(data, "Getting latest top 10 uploaded books"));    
        }else{
            const shuffled = data.sort(() => 0.5 - Math.random());
            let selected = shuffled.slice(0, 6);
            return res.status(200).json(httpStatus200(selected, "Getting latest top 10 uploaded books"));
        }
        
    } catch (error) {
        if (error) {
            return res.status(500).json(httpStatus500(error))
        }
    }
}