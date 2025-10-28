const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const paymentRoutes = require('./routes/paymentRoutes')

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());  // Enable CORS for all origins


// Routes
app.use('/api/products', productRoutes);
app.use('/api/payments', paymentRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
