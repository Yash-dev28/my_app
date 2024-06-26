// Example API route for saving user data
const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Assuming you have a User model

// POST /api/users - Create a new user
router.post('/users', async (req, res) => {
    try {
        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            mobileNo: req.body.mobileNo,
            email: req.body.email,
            address: {
                street: req.body.address.street,
                city: req.body.address.city,
                state: req.body.address.state,
                country: req.body.address.country
            },
            loginId: req.body.loginId,
            password: req.body.password
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser); // Respond with saved user data
    } catch (err) {
        console.error('Error saving user:', err);
        res.status(500).json({ error: 'Error saving user' });
    }
});

module.exports = router;
