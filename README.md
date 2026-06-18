# 💰 Expense Tracker

A modern full-stack Expense Tracker application built with the MERN Stack that helps users manage their personal finances efficiently. Users can track income and expenses, visualize spending patterns through interactive charts, monitor financial health, and maintain a complete transaction history with secure authentication.

---

## 🚀 Features

### 🔐 Authentication & User Management

* User Registration and Login
* JWT-based Authentication
* Protected Routes
* User Profile Management
* Profile Photo Upload
* Persistent Login Sessions
* Secure Password Storage

### 💵 Income Management

* Add Income Records
* View Income History
* Delete Income Entries
* Categorize Income Sources
* Income Analytics
* Recent Income Tracking

### 💸 Expense Management

* Add Expense Records
* View Expense History
* Delete Expense Entries
* Expense Categorization
* Expense Analytics
* Last 30 Days Expense Summary

### 📊 Dashboard & Analytics

* Financial Overview Dashboard
* Income vs Expense Comparison
* Interactive Pie Charts
* Interactive Bar Charts
* Interactive Line Charts
* Recent Transactions Overview
* Financial Insights

### 📈 Data Visualization

* Income Distribution Charts
* Expense Breakdown Charts
* Transaction Trend Analysis
* Monthly Financial Reports
* Custom Tooltips & Legends

### 📱 Modern User Experience

* Responsive Design
* Clean Dashboard Layout
* Interactive Components
* Modal-Based Forms
* Emoji Picker Support
* Smooth Navigation
* Modern UI Design

---

## 🏗️ Project Architecture

```text
ExpenseTracker/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── context/
│   │   ├── utils/
│   │   └── assets/
│   └── vite.config.js
│
└── postman/
```

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Vite
* React Router DOM
* Axios
* Context API
* Recharts
* React Icons
* Tailwind CSS
* JavaScript (ES6+)

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Multer
* bcryptjs
* CORS
* dotenv

## Database

* MongoDB Atlas / Local MongoDB

## API Testing

* Postman

---

# 📂 Backend Structure

## Config

### db.js

Responsible for establishing MongoDB database connection.

## Controllers

### authController.js

Handles:

* User Registration
* User Login
* User Profile Retrieval
* Authentication Logic

### incomeController.js

Handles:

* Add Income
* Fetch Income
* Delete Income
* Income Statistics

### expenseController.js

Handles:

* Add Expense
* Fetch Expenses
* Delete Expenses
* Expense Statistics

### dashboardController.js

Handles:

* Dashboard Analytics
* Financial Summaries
* Transaction Insights

## Middleware

### authMiddleware.js

Protects routes using JWT verification.

### uploadMiddleware.js

Handles profile image uploads using Multer.

## Models

### User.js

Stores:

* User Information
* Authentication Details
* Profile Photo

### Income.js

Stores:

* Income Source
* Amount
* Date
* User Reference

### Expense.js

Stores:

* Expense Details
* Amount
* Category
* Date
* User Reference

---

# 🎨 Frontend Structure

## Pages

### Authentication

* Login Page
* Signup Page

### Dashboard

* Home Dashboard
* Income Page
* Expense Page

## Components

### Dashboard Components

* Finance Overview
* Recent Transactions
* Recent Income
* Expense Transactions
* Last 30 Days Expenses

### Chart Components

* Pie Charts
* Bar Charts
* Line Charts
* Custom Tooltips
* Custom Legends

### Income Components

* Add Income Form
* Income List
* Income Overview

### Expense Components

* Add Expense Form
* Expense List
* Expense Overview

---

# 🗄️ Database Schema

## User Schema

```javascript
{
  fullName: String,
  email: String,
  password: String,
  profileImageUrl: String
}
```

## Income Schema

```javascript
{
  userId: ObjectId,
  source: String,
  amount: Number,
  date: Date,
  icon: String
}
```

## Expense Schema

```javascript
{
  userId: ObjectId,
  category: String,
  amount: Number,
  date: Date,
  icon: String
}
```

---

# ⚙️ Installation & Setup

## 1. Clone Repository

```bash
git clone https://github.com/AdityaKarippadathUdai/ExpenseTracker

cd ExpenseTracker
```

---

## 2. Backend Setup

Navigate to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create `.env`

```env
PORT=8000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

CLIENT_URL=http://localhost:5173
```

Start Backend:

```bash
npm run dev
```

Backend runs on:

```text
http://localhost:8000
```

---

## 3. Frontend Setup

Navigate to frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create `.env`

```env
VITE_API_URL=http://localhost:8000
```

Run frontend:

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# 🔑 API Endpoints

## Authentication

```http
POST /api/auth/register
```

Register User

```http
POST /api/auth/login
```

Login User

```http
GET /api/auth/profile
```

Get User Profile

---

## Income

```http
POST /api/income/add
```

Add Income

```http
GET /api/income
```

Get All Income

```http
DELETE /api/income/:id
```

Delete Income

---

## Expenses

```http
POST /api/expense/add
```

Add Expense

```http
GET /api/expense
```

Get All Expenses

```http
DELETE /api/expense/:id
```

Delete Expense

---

## Dashboard

```http
GET /api/dashboard
```

Dashboard Analytics

---

# 📊 Key Metrics Displayed

* Total Income
* Total Expenses
* Net Balance
* Recent Transactions
* Income Trends
* Expense Trends
* Spending Categories
* Monthly Financial Activity

---

# 🔒 Security Features

* JWT Authentication
* Password Hashing with bcrypt
* Protected API Routes
* Input Validation
* Secure Environment Variables
* Authentication Middleware

---

# 🧪 Testing

Import the Postman Collection:

```text
postman/collections/
```

Test:

* Authentication APIs
* Income APIs
* Expense APIs
* Dashboard APIs

---

# 🚀 Future Enhancements

* Budget Planning
* Expense Categories Management
* Recurring Transactions
* Email Notifications
* Export to PDF
* Export to Excel
* Multi-Currency Support
* Dark Mode
* Mobile App Version
* AI-Powered Spending Insights
* Financial Goal Tracking

---

# 📸 Screenshots

Add screenshots of:

1. Login Page
2. Signup Page
3. Dashboard
4. Income Management
5. Expense Management
6. Analytics Dashboard

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit changes

```bash
git commit -m "Added new feature"
```

4. Push changes

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

# 👨‍💻 Author

**Aditya K U**

* B.Tech CSE (AI)
* Full Stack Developer
* Machine Learning Enthusiast

GitHub: https://github.com/AdityaKarippadathUdai

LinkedIn: Add your LinkedIn profile here

---

# ⭐ Support

If you found this project useful, please consider giving it a star on GitHub.

```text
⭐ Star the repository
🍴 Fork the repository
📢 Share with others
```
