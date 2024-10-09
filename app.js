const express = require("express");
const dotenv = require("dotenv");
const path = require('path');
const cors = require('cors');
const connectDatabase=require('./config/connectdatabase')

const app = express();

// Load environment variables
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

// Import routes
const products = require('./routes/product');
const orders = require('./routes/order');

// Use CORS middleware

connectDatabase();


app.use(express.json())
app.use(cors());

// Mount routes
app.use('/api/v1', products);
app.use('/api/v1', orders);

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ success: false, message: 'Resource not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Internal Server Error' });
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} in ${process.env.NODE_ENV} mode`);
});
