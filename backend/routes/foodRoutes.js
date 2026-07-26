const express = require('express');
const router = express.Router();
const FoodItem = require('../models/FoodItem');

router.get('/menu', async (req, res) => {
    try {
        const menu = await FoodItem.find();
        res.json(menu);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/add', async (req, res) => {
    try {
        const newItem = new FoodItem(req.body);
        await newItem.save();
        res.status(201).json({ message: "Item added successfully!", newItem });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;