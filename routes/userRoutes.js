const express = require('express');
const { getAllUser, loginUser, createUser } = require('../controller/userController');

// router object
const router = express.Router();

//Get all user || GET
router.get('/all-users', getAllUser)

// Create User || POST
router.post('/register', createUser);

// Login User || POST
router.post('/login', loginUser)

module.exports = router;