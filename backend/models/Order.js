const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: String, // 👈 ObjectId se badal kar String kiya taaki format mismatch na ho
    required: true
  },
  items: [{
    foodItemId: { 
      type: String, // 👈 ObjectId se badal kar String kiya taaki "4" ya "15" jaise numbers save ho sakein
      required: true 
    },
    quantity: { type: Number, required: true }
  }],
  totalAmount: { type: Number, required: true },
  status: { type: String, default: 'Pending' }, // Pending, Preparing, Out for Delivery, Delivered
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema); // 👈 Code fix kiya