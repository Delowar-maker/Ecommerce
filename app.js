const express = require('express');
// const router = require('./src/routes/api');
const router = require('./src/route/api');
const app = new express();

const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');

const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const path = require("path");






const URI = "mongodb+srv://delowar:delowar1239@cluster0.c6tjknn.mongodb.net/MernEcommerce";


mongoose.connect(URI, {
    autoIndex: true
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

app.use(cookieParser());
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));


const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 })
app.use(limiter)

app.set('etag', false);
app.use("/api/v1", router)

app.use(express.static('client/dist'));

// Add React Front End Routing
app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
})

module.exports = app;