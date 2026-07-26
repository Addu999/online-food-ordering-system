const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Jo User model humne banaya tha

// @route   POST api/auth/register
// @desc    Register a new user (Customer)
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    // 1. Basic Validation
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Please enter all fields' });
    }

    try {
        // 2. Check agar user pehle se exist karta hai
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // 3. Naya User instance banana
        user = new User({
            name,
            email,
            password
        });

        // 4. Password ko encrypt (Hash) karna
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        // 5. Database mein save karna
        await user.save();

        // 6. JWT Token generate karna taaki register hote hi user login ho jaye
        const payload = {
            user: {
                id: user.id,
                role: user.role
            }
        };

        // Abhi ke liye 'secretKey' use kar rhe hain, ise baad mein .env mein daal denge
        jwt.sign(
            payload, 
            'mySecretTokenKey', 
            { expiresIn: '1d' }, 
            (err, token) => {
                if (err) throw err;
                res.status(201).json({
                    token,
                    user: { id: user.id, name: user.name, email: user.email, role: user.role }
                });
            }
        );

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error during registration');
    }
});

module.exports = router;