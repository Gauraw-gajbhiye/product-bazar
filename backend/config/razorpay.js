const Razorpay = require('razorpay')
require('dotenv').config()

console.log('keyid', process.env.RAZORPAY_KEY_ID)
console.log('keysecret', process.env.RAZORPAY_KEY_SECRET)

const razorPayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
})

module.exports = razorPayInstance;