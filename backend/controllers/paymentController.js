const razorpay = require('../config/razorpay');

exports.createOrder = async (req, res) => {
    try {
        let { amount, currency = 'INR', receipt = 'receipt#1' } = req.body;

        if (!amount) {
            return res.status(400).json({ success: false, message: 'Amount is required' });
        }

        // Ensure amount is an integer
        amount = Math.round(Number(amount));

        const options = {
            amount,  // already in paise (from frontend)
            currency,
            receipt,
        };

        console.log("🟢 Creating order with:", options);

        const order = await razorpay.orders.create(options);

        res.json({
            success: true,
            order,
        });
    } catch (error) {
        console.error("❌ Error creating Razorpay order:", error);
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
};
