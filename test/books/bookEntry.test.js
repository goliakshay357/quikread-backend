const {bookEntry} = require('../../controllers/books/bookEntry');
const {Books} = require("../../models/db");
const res = {
    json: function(d) {},
    status: function(s) {this.statusCode = s; return this;}
};

describe("bookEntry", () => {
    beforeAll(done => {
        done()
    });

    it("should respond with a 500 status code for an empty request body", async () => {

        await bookEntry({}, res);
        expect(res.statusCode).toBe(500)
    });

    it("should respond with a 500 status for a isbn but return value is null", async () => {
        const mock = jest.spyOn(Books, 'find');  // spy on Message.findOne()
        mock.mockImplementation(() => Promise.resolve(null));
        let req = {
            body: {
                "isbn":"1"
            }
        }
        await bookEntry(req, res);
        expect(res.statusCode).toBe(500)
    });
    it("should respond with a 500 status for a isbn but undefined return value", async () => {
        const mock = jest.spyOn(Books, 'find');  // spy on Message.findOne()
        mock.mockImplementation(() => Promise.resolve());
        let req = {
            body: {
                "isbn":"1"
            }
        }
        await bookEntry(req, res);
        expect(res.statusCode).toBe(500)
    });
    it("should respond with a 200 status for a isbn where book already exists", async () => {
        const mock = jest.spyOn(Books, 'find');  // spy on Message.findOne()
        mock.mockImplementation(() => Promise.resolve([{
            "created_on": "2021-04-22T07:24:25.387Z",
            "author_name": [ 'Eric Ries' ],
            "book_category": [ 'business', 'entrepreneurship' ],
            "youtube_links": [ 'https://www.youtube.com/watch?v=RSaIOCHbuYw' ],
            "book_quote": [],
            "podcast_mp3": []
        }]));
        let req = {
            body: {
                "isbn":"1"
            }
        }
        await bookEntry(req, res);
        expect(res.statusCode).toBe(200)
    });
});

afterAll(done => {
    done();
});
