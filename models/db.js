const mongoose = require("mongoose");
const dotenv = require('dotenv')
const path = require('path');

// Load config
var dir = path.join(__dirname, '../config/config.env')
dotenv.config({ path: dir })

mongoose
	.connect(process.env.DATABASE_HOST_URL, {
		useNewUrlParser: true,
		useFindAndModify: false,
		useCreateIndex: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Database Connected 🚀");
	})
	.catch((err) => {
		console.log("Database Connection Failed 💩");
		console.error(err);
		process.exit(1);
	});

// Error Signal
mongoose.connection.on('error', function (err) {
	console.log("Mongoose connection has occured an error: " + err);
});

// Disconnection Signal
mongoose.connection.on('disconnected', function () {
	console.log("Mongoose default connection is disconnected");
});

process.on('SIGINT', function () {
	mongoose.connection.close(function () {
		console.log("Mongoose default connection is disconnected due to application termination");
		process.exit(0)
	});
});

const db = {};

db.Books = require('./collections/books')
db.mongoose = mongoose;

module.exports = db;
