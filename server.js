const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const colors = require('colors');


// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
