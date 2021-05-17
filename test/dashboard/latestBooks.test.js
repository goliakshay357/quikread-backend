const {latestBooks} = require('../../controllers/dashboard/latestBooks');
const {Books} = require("../../models/db");
const res = {
    json: function(d) {},
    status: function(s) {this.statusCode = s; return this;}
};

describe("latestBooks", () => {
    beforeAll(done => {
        done()
    });

    it("should respond with a 500 status code for an empty request body", async () => {

        await latestBooks({}, res);
        expect(res.statusCode).toBe(500)
    });

    it("should respond with a 500 status for a number but return value is null", async () => {
        const mock = jest.spyOn(Books, 'find');  // spy on Message.findOne()
        mock.mockImplementation(() => Promise.resolve(null));
        let req = {
            params: {
                "number":"10"
            }
        }
        await latestBooks(req, res);
        expect(res.statusCode).toBe(500)
    });
    it("should respond with a 500 status for a number but undefined return value", async () => {
        const mock = jest.spyOn(Books, 'find');  // spy on Message.findOne()
        mock.mockImplementation(() => Promise.resolve());
        let req = {
            params: {
                "number":"10"
            }
        }
        await latestBooks(req, res);
        expect(res.statusCode).toBe(500)
    });

});

afterAll(done => {
    done();
});
