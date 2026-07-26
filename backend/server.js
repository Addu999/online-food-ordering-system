const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Menu = require("./models/Menu");
const Order = require("./models/Order"); // 👈 Order Model Import kiya

const app = express();

app.use(cors());
app.use(express.json());

const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']); // Google aur Cloudflare ka DNS use karega jo DNS block hata dega

// MongoDB Connection (Cloud Atlas URL Set)
const dbURI = "mongodb+srv://addu9822_db_user:addu9822@cluster0.mddanxq.mongodb.net/foodOrderingSystem?retryWrites=true&w=majority";

mongoose
  .connect(dbURI)
  .then(() => console.log("🎉 BOOM! MongoDB Atlas Cloud Successfully Connected!"))
  .catch((err) => console.error("❌ Database connection error:", err));

// ==========================================
// 1. SCHEMAS (DATABASE STRUCTURE)
// ==========================================

// Food Schema
const foodItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: String, required: true },
});
const FoodItem = mongoose.model("FoodItem", foodItemSchema);

// User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["customer", "admin"], default: "customer" },
  createdAt: { type: Date, default: Date.now }
});
const User = mongoose.model("User", userSchema);

// ==========================================
// 2. USER AUTHENTICATION ROUTES
// ==========================================

// Register Route
app.post("/api/auth/register", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: "Please enter all fields" });
  }
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }
    user = new User({ name, email, password });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    const payload = { user: { id: user.id, role: user.role } };
    jwt.sign(payload, "mySecretTokenKey", { expiresIn: "1d" }, (err, token) => {
      if (err) throw err;
      res.status(201).json({
        message: "User registered successfully!",
        token,
        user: { id: user.id, name: user.name, email: user.email, role: user.role }
      });
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login Route
app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Please enter all fields" });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid Credentials (Email galat hai)" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid Credentials (Password galat hai)" });
    }
    const payload = { user: { id: user.id, role: user.role } };
    jwt.sign(payload, "mySecretTokenKey", { expiresIn: "1d" }, (err, token) => {
      if (err) throw err;
      res.json({
        message: "Login successful!",
        token,
        user: { id: user.id, name: user.name, email: user.email, role: user.role }
      });
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ==========================================
// 3. FOOD & MENU ROUTES
// ==========================================

app.post("/api/food/add", async (req, res) => {
  try {
    const newItem = new FoodItem(req.body);
    await newItem.save();
    res.status(201).json({ message: "Item added successfully!", newItem });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get("/api/food/menu", async (req, res) => {
  try {
    const menu = await FoodItem.find();
    res.json(menu);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/menu/add", async (req, res) => {
  try {
    const menuItem = new Menu(req.body);
    await menuItem.save();
    res.status(201).json({ message: "Menu item added successfully", menuItem });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/menu", async (req, res) => {
  try {
    const menu = await Menu.find();
    res.json(menu);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ==========================================
// 4. ORDER MANAGEMENT ROUTES
// ==========================================

app.post("/api/orders/place", async (req, res) => {
  const { user, items, totalAmount } = req.body;
  if (!user || !items || items.length === 0 || !totalAmount) {
    return res.status(400).json({ error: "Missing required order details" });
  }
  try {
    const newOrder = new Order({ user, items, totalAmount });
    await newOrder.save();
    res.status(201).json({ message: "Order placed successfully!", newOrder });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/orders/user/:userId", async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.userId });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/", (req, res) => {
  res.send("Backend Server ekdum mast chal raha hai!");
});

// ==========================================
// 5. SERVER START
// ==========================================
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});