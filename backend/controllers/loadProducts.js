const fs = require('fs');
const path = require('path');
const Product = require('../models/productModel');

const loadProducts = async () => {
    try {
        // Check if products already exist
        const count = await Product.countDocuments();
        if (count > 0) {
            console.log('Products already exist in DB. Skipping load.');
            return;
        }

        // Read JSON file
        const filePath = path.join(__dirname, '../data/products.json');
        const data = fs.readFileSync(filePath, 'utf-8');
        const products = JSON.parse(data);

        // Insert into MongoDB
        await Product.insertMany(products);
        console.log('Products loaded into MongoDB successfully!');
    } catch (error) {
        console.error('Error loading products:', error.message);
    }
};

module.exports = loadProducts;
