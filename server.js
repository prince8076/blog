const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');

// Load env variables
dotenv.config(); // because it is root we don't need to specify the path but if this file outside the root with have to use path
// synatx dotenv.config({ path: './config.env' });


// mongoose connection
connectDB();


// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.get("/", (req, res) => {
    res.status(200).send({
        "message": "Welcome to the API"
    });
})

//PORT
const PORT = process.env.PORT || 5000;
//Listen
app.listen(PORT, () => {
    console.log(`Server running on ${process.env.DEV_MODE} mode port no ${PORT}`.yellow.bold);
    console.log(`Press Ctrl+C to stop server`.yellow.bold);
})
