const {getBooks} = require('../../controllers/books/getBooks');
const {Books} = require("../../models/db");
const res = {
    json: function(d) {},
    status: function(s) {this.statusCode = s; return this;}
};

describe("getBooks", () => {
    beforeAll(done => {
        done()
    });

    it("should respond with a 200 status code for an empty request body", async () => {

        await getBooks({}, res);
        expect(res.statusCode).toBe(200)
    });

});

afterAll(done => {
    done();
});
