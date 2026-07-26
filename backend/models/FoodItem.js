const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    image: { type: String }, // image URL ya path
    category: { type: String, required: true }
});

module.exports = mongoose.model('FoodItem', foodItemSchema);