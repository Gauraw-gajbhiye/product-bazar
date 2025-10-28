const express = require('express')//imports express library need to create routes & midleware
const router = express.Router() //creates a new router instances

const { createOrder } = require('../controllers/paymentController')//imports name export creatOrder from paymentcontroller

router.post('/orders', createOrder)

module.exports = router