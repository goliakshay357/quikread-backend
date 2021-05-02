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
    dsn: "https://9352bafa2e1f4436a9cb58e47156f0a1@sentry.canvasboard.live/5",

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    integrations: [
        new Sentry.Integrations.Http({ tracing: true }),
        new Tracing.Integrations.Express({
            app,
        }),
    ],
    tracesSampleRate: 1.0,
});

app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());
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
app.use(Sentry.Handlers.errorHandler());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`\nServer is running on PORT: ${PORT} 😎\n`)
});