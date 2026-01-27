# 🛒 Product Bazar – Full Stack eCommerce Platform

Product Bazar is a full-stack eCommerce web application built using the **MERN stack**, featuring real-world functionalities like product management, cart system, user authentication, and **online payments using Razorpay**.

This project demonstrates end-to-end application development, from frontend UI to backend APIs and third-party payment gateway integration.

---

## 🚀 Live Demo

Frontend:  
https://product-bazar-frontend.onrender.com

Backend API:  
https://productbazar.onrender.com

---

## 🛠 Tech Stack

### Frontend
- React.js (Vite)
- Tailwind CSS
- Axios
- Razorpay Checkout

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Razorpay API

### Deployment
- Frontend: Render  
- Backend: Render  
- Database: MongoDB Atlas  

---

## ✨ Features

- Product listing with dynamic data
- Add to cart & quantity management
- Admin product management
- Razorpay payment gateway integration
- Secure order creation via backend
- Environment-based API configuration
- Deployed full-stack application

---

## 💳 Payment Integration (Razorpay)

- Orders are created securely from backend using Razorpay API.
- Frontend opens Razorpay checkout with generated order ID.
- Supports UPI, Cards, Netbanking, Wallets.
- Integrated in **test mode** for demonstration purposes.

---

## 📂 Folder Structure
/frontend → React client application
/backend → Express REST API

VITE_API_URL=https://productbazar.onrender.com

MONGO_URI=your_mongodb_connection_string
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
JWT_SECRET=your_jwt_secret


---

## 🧠 What I Learned From This Project

- Building REST APIs with Express & MongoDB
- Connecting frontend with backend using Axios
- Handling environment variables in Vite & production
- Deploying full-stack apps on Render
- Integrating third-party payment gateways (Razorpay)
- Debugging production issues (CORS, env, cold starts)

---

## 🧪 How To Run Locally

### Frontend
```bash
cd frontend
npm install
npm run start

### Backend
cd backend
npm install
npm start


