const express = require('express');
const dotenv = require('dotenv')
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan')
const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");

// Loading routes
const router = require('./routes/index');

// Load config
dotenv.config({ path: './config/config.env' })

const app = express();


// ------------------ Sentry ----------------------
Sentry.init({
    dsn: "http://0c476af8ae9f4b62a2ee07be5e1468c6@3.7.252.90:9000/4",

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
});
// -------------------------------------------------


// Body parser and morgan
app.use(morgan('dev'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setting up cors
app.use(cors());

app.get("/", function(req, res) {
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