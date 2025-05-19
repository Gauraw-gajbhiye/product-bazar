const axios = require('axios');
const mongoose = require('mongoose');
const Product = require('./models/productModel');
require('dotenv').config();

const seedProducts = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        const res = await axios.get('https://dummyjson.com/products?limit=500');
        const products = res.data.products;

        await Product.deleteMany({});
        await Product.insertMany(products);
        console.log('Dummy data inserted successfully');
        process.exit();
    } catch (error) {
        console.error('Error seeding products:', error.message);
        process.exit(1);
    }
};

seedProducts();
