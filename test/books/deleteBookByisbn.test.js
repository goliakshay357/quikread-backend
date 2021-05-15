const {deleteBookByisbn} = require('../../controllers/books/deleteBookByisbn');
const {Books} = require("../../models/db");
const res = {
    json: function(d) {},
    status: function(s) {this.statusCode = s; return this;}
};

describe("deleteBookByisbn", () => {
    beforeAll(done => {
        done()
    });

    it("should respond with a 500 status code for an empty request body", async () => {

        await deleteBookByisbn({}, res);
        expect(res.statusCode).toBe(500)
    });
    it("should respond with a 500 status code for an empty isbn", async () => {

        let req = {
            params: {
                "isbn":""
            }
        }
        await deleteBookByisbn(req, res);
        expect(res.statusCode).toBe(500)
    });

    it("should respond with a 500 status for a isbn but return value is null", async () => {
        const mock = jest.spyOn(Books, 'deleteMany');  // spy on Message.findOne()
        mock.mockImplementation(() => Promise.resolve(null));
        let req = {
            params: {
                "isbn":"1"
            }
        }
        await deleteBookByisbn(req, res);
        expect(res.statusCode).toBe(200)
    });
    it("should respond with a 200 status for a isbn but undefined return value", async () => {
        const mock = jest.spyOn(Books, 'find');  // spy on Message.findOne()
        mock.mockImplementation(() => Promise.resolve());
        let req = {
            params: {
                "isbn":"1"
            }
        }
        await deleteBookByisbn(req, res);
        expect(res.statusCode).toBe(200)
    });
    it("should respond with a 200 status for a isbn but data return value length is an empty array", async () => {
        const mock = jest.spyOn(Books, 'find');  // spy on Message.findOne()
        mock.mockImplementation(() => Promise.resolve([]));
        let req = {
            params: {
                "isbn":"1"
            }
        }
        await deleteBookByisbn(req, res);
        expect(res.statusCode).toBe(200)
    });

});

afterAll(done => {
    done();
});
