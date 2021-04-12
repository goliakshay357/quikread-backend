const express = require('express');
const dotenv = require('dotenv')
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan')

// Load config
dotenv.config({ path: './config/config.env' })

const app = express();

// Body parser and morgan
app.use(morgan('dev'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setting up cors
app.use(cors());

app.get("/", function (req, res) {
  res.status(200).json({
    success: true,
    message: "Welcome to Quikreads API Server🚀"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`\nServer is running on PORT: ${PORT} 😎\n`)
});