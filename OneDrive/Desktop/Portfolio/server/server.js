const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// Root route for welcome message
app.get('/', (req, res) => {
    res.json({ message: "Welcome to DressStore application." });
});

// Import routes
const contactRoutes = require('./routes/contactRoutes');
const userRoutes = require('./routes/userRoutes');

// Use routes
app.use('/api/contacts', contactRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
