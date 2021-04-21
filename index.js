const express = require('express');
const dotenv = require('dotenv')
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan')


// Loading routes
const router = require('./routes/index');

// Load config
dotenv.config({ path: './config/config.env' })

const app = express();

// Body parser and morgan
app.use(morgan('dev'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setting up cors
app.use(cors());

app.get("/", function (req, res) {
  res.status(200).json({
    success: true,
    message: "Welcome to Quikreads API Server🚀"
  });
});

app.use('/api/v1', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`\nServer is running on PORT: ${PORT} 😎\n`)
});