const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const colors = require('colors');
const PORT = process.env.PORT || 5000;


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

//Listen
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`.yellow.bold);
    console.log(`Press Ctrl+C to stop server`.yellow.bold);
})
