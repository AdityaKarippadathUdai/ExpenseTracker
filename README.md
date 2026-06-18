<div align="center">

# 💰 Expense Tracker

### A modern full-stack personal finance manager built on the MERN stack

[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)](https://www.docker.com/)

</div>

A full-stack expense tracker that helps users manage personal finances — track income and expenses, visualize spending patterns through interactive charts, monitor financial health, and maintain a complete transaction history behind secure JWT authentication.

---

## 🚀 Features

### 🔐 Authentication & User Management
- User registration and login
- JWT-based authentication
- Protected routes
- Profile management with photo upload
- Persistent login sessions
- Secure password hashing

### 💵 Income Management
- Add, view, and delete income records
- Categorize income sources
- Income analytics and recent income tracking

### 💸 Expense Management
- Add, view, and delete expense records
- Categorize expenses
- Expense analytics and last-30-days summary

### 📊 Dashboard & Analytics
- Financial overview dashboard
- Income vs. expense comparison
- Interactive pie, bar, and line charts
- Recent transactions overview

### 📈 Data Visualization
- Income distribution and expense breakdown charts
- Transaction trend analysis
- Custom tooltips and legends

### 📱 Modern User Experience
- Fully responsive design
- Modal-based forms
- Emoji picker support
- Clean, modern UI

---

## 🛠️ Tech Stack

### Frontend
| Technology | Badge | Purpose |
|---|---|---|
| React.js | ![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) | Component-based UI library |
| Vite | ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) | Dev server & build tool |
| React Router DOM | ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=reactrouter&logoColor=white) | Client-side routing |
| Axios | ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white) | Promise-based HTTP client |
| Context API | ![Context API](https://img.shields.io/badge/Context_API-BB9AF7?style=flat-square) | Global state management |
| Recharts | ![Recharts](https://img.shields.io/badge/Recharts-BB9AF7?style=flat-square) | Composable charting library |
| React Icons | ![React Icons](https://img.shields.io/badge/React_Icons-BB9AF7?style=flat-square) | Icon library |
| Tailwind CSS | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) | Utility-first styling |
| JavaScript (ES6+) | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | Core language |

### Backend
| Technology | Badge | Purpose |
|---|---|---|
| Node.js | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white) | JavaScript runtime |
| Express.js | ![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white) | Web application framework |
| MongoDB | ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white) | NoSQL document database |
| Mongoose | ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat-square&logo=mongoose&logoColor=white) | MongoDB object modeling |
| JWT | ![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white) | Stateless authentication |
| Multer | ![Multer](https://img.shields.io/badge/Multer-BB9AF7?style=flat-square) | Multipart / file uploads |
| bcryptjs | ![bcryptjs](https://img.shields.io/badge/bcryptjs-BB9AF7?style=flat-square) | Password hashing |
| CORS | ![CORS](https://img.shields.io/badge/CORS-BB9AF7?style=flat-square) | Cross-origin resource sharing |
| dotenv | ![dotenv](https://img.shields.io/badge/dotenv-ECD53F?style=flat-square&logo=dotenv&logoColor=black) | Environment variable management |

### Database & Tooling
| Technology | Badge | Purpose |
|---|---|---|
| MongoDB Atlas / Local MongoDB | ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white) | Data persistence |
| Postman | ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=postman&logoColor=white) | API testing & documentation |

### DevOps & Containerization
| Technology | Badge | Purpose |
|---|---|---|
| Docker | ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white) | Containerizes the backend and frontend |
| Docker Compose | ![Docker Compose](https://img.shields.io/badge/Docker_Compose-2496ED?style=flat-square&logo=docker&logoColor=white) | Orchestrates both services for local dev |

---

## 🏗️ Project Structure

```text
ExpenseTracker/
├── docker-compose.yml
├── backend/
│   ├── config/
│   │   └── db.js                      # MongoDB connection setup
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── dashboardController.js
│   │   ├── expenseController.js
│   │   └── incomeController.js
│   ├── middleware/
│   │   ├── authMiddleware.js          # JWT route protection
│   │   └── uploadMiddleware.js        # Multer config
│   ├── models/
│   │   ├── Expense.js
│   │   ├── Income.js
│   │   └── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── dashboardRoutes.js
│   │   ├── expenseRoutes.js
│   │   └── incomeRoutes.js
│   ├── uploads/                       # Stores uploaded profile photos
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   │   ├── favicon.svg
│   │   └── icons.svg
│   ├── src/
│   │   ├── assets/
│   │   │   ├── hero.png
│   │   │   ├── images/
│   │   │   ├── react.svg
│   │   │   └── vite.svg
│   │   ├── components/
│   │   │   ├── Cards/
│   │   │   │   ├── CharAvatar.jsx
│   │   │   │   ├── InfoCard.jsx
│   │   │   │   └── TransactionInfoCard.jsx
│   │   │   ├── Charts/
│   │   │   │   ├── CustomBarChart.jsx
│   │   │   │   ├── CustomePieChart.jsx
│   │   │   │   ├── CustomLegend.jsx
│   │   │   │   ├── CustomLineChart.jsx
│   │   │   │   └── CustomTooltip.jsx
│   │   │   ├── Dashboard/
│   │   │   │   ├── ExpenseTransactions.jsx
│   │   │   │   ├── FinanceOverview.jsx
│   │   │   │   ├── Last30DaysExpenses.jsx
│   │   │   │   ├── RecentIncome.jsx
│   │   │   │   ├── RecentIncomeWithChart.jsx
│   │   │   │   └── RecentTransactions.jsx
│   │   │   ├── Expense/
│   │   │   │   ├── AddExpenseForm.jsx
│   │   │   │   ├── ExpenseList.jsx
│   │   │   │   └── ExpenseOverview.jsx
│   │   │   ├── Income/
│   │   │   │   ├── AddIncomeForm.jsx
│   │   │   │   ├── IncomeList.jsx
│   │   │   │   └── IncomeOverview.jsx
│   │   │   ├── Inputs/
│   │   │   │   ├── Input.jsx
│   │   │   │   └── ProfilePhotoSelector.jsx
│   │   │   ├── layouts/
│   │   │   │   ├── AuthLayout.jsx
│   │   │   │   ├── DashboardLayout.jsx
│   │   │   │   ├── Navbar.jsx
│   │   │   │   └── SideMenu.jsx
│   │   │   ├── DeleteAlert.jsx
│   │   │   ├── EmojiPickerPopup.jsx
│   │   │   └── Modal.jsx
│   │   ├── context/
│   │   │   └── userContext.jsx
│   │   ├── hooks/
│   │   │   └── useUserAuth.jsx
│   │   ├── pages/
│   │   │   ├── Auth/
│   │   │   │   ├── Login.jsx
│   │   │   │   └── SignUp.jsx
│   │   │   └── Dashboard/
│   │   │       ├── Expense.jsx
│   │   │       ├── Home.jsx
│   │   │       └── Income.jsx
│   │   ├── utils/
│   │   │   ├── apiPaths.js
│   │   │   ├── axiosInstance.js
│   │   │   ├── data.js
│   │   │   ├── helper.js
│   │   │   └── uploadImage.js
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── Dockerfile
│   ├── package.json
│   └── vite.config.js
│
└── postman/
    └── collections/
        └── 52118816-ff7125a7-1b9e-472b-bfa9-3f130cee9d77.json
```

---

## 📂 Backend Structure

**Config** — `db.js` establishes the MongoDB connection.

**Controllers**
- `authController.js` — registration, login, profile retrieval
- `incomeController.js` — add / fetch / delete income, income stats
- `expenseController.js` — add / fetch / delete expenses, expense stats
- `dashboardController.js` — aggregated financial summaries and insights

**Middleware**
- `authMiddleware.js` — verifies JWTs and protects routes
- `uploadMiddleware.js` — handles profile image uploads via Multer

**Models**
- `User.js` — user info, auth details, profile photo
- `Income.js` — source, amount, date, user reference
- `Expense.js` — category, amount, date, user reference

**Routes**
- `authRoutes.js`, `incomeRoutes.js`, `expenseRoutes.js`, `dashboardRoutes.js` — map each controller's endpoints to the Express app

---

## 🎨 Frontend Structure

**Pages**
- `Auth/Login.jsx`, `Auth/SignUp.jsx`
- `Dashboard/Home.jsx`, `Dashboard/Income.jsx`, `Dashboard/Expense.jsx`

**Components**
- `Cards/` — `CharAvatar`, `InfoCard`, `TransactionInfoCard`
- `Charts/` — `CustomBarChart`, `CustomePieChart`, `CustomLineChart`, `CustomLegend`, `CustomTooltip`
- `Dashboard/` — `FinanceOverview`, `RecentTransactions`, `RecentIncome`, `RecentIncomeWithChart`, `ExpenseTransactions`, `Last30DaysExpenses`
- `Income/` — `AddIncomeForm`, `IncomeList`, `IncomeOverview`
- `Expense/` — `AddExpenseForm`, `ExpenseList`, `ExpenseOverview`
- `Inputs/` — `Input`, `ProfilePhotoSelector`
- `layouts/` — `AuthLayout`, `DashboardLayout`, `Navbar`, `SideMenu`
- Top-level: `Modal.jsx`, `DeleteAlert.jsx`, `EmojiPickerPopup.jsx`

**Context, Hooks & Utils**
- `context/userContext.jsx` — global auth/user state
- `hooks/useUserAuth.jsx` — auth-aware hook for protected pages
- `utils/` — `apiPaths.js`, `axiosInstance.js`, `data.js`, `helper.js`, `uploadImage.js`

---

## 🗄️ Database Schema

**User**
```javascript
{
  fullName: String,
  email: String,
  password: String,
  profileImageUrl: String
}
```

**Income**
```javascript
{
  userId: ObjectId,
  source: String,
  amount: Number,
  date: Date,
  icon: String
}
```

**Expense**
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

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/AdityaKarippadathUdai/ExpenseTracker
cd ExpenseTracker
```

### 2. Backend setup
```bash
cd backend
npm install
```

Create a `.env` file:
```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
```

Start the backend:
```bash
npm run dev
```
Runs on `http://localhost:8000`

### 3. Frontend setup
```bash
cd frontend
npm install
```

Run the frontend:
```bash
npm run dev
```
Runs on `http://localhost:5173`

---

## 🐳 Running with Docker

As an alternative to running the backend and frontend separately, the repo includes a `docker-compose.yml` at the root that builds and runs both services together.

**Prerequisites:** Docker and Docker Compose installed.

**1. Make sure your environment files are in place**
- `backend/.env` must exist — it's loaded into the backend container via `env_file`, so the same variables from the manual setup above (`PORT`, `MONGO_URI`, `JWT_SECRET`, `CLIENT_URL`) apply here too.
- If `MONGO_URI` points to **MongoDB running locally on your machine** rather than MongoDB Atlas, use `host.docker.internal` instead of `localhost` in the connection string — e.g. `mongodb://host.docker.internal:27017/expense-tracker`. Inside a container, `localhost` refers to the container itself, not your machine. This is exactly why the backend service defines `extra_hosts: host.docker.internal:host-gateway`, which maps that hostname to your host machine's network.
- The frontend service has no `env_file` entry in compose, so if your frontend depends on `frontend/.env` (e.g. `VITE_API_URL`), make sure it exists on disk before building — compose won't inject it for you.

**2. Build and start both containers**
```bash
docker compose up --build
```

**3. Access the app**
| Service | Container | URL |
|---|---|---|
| Backend | `expense-backend` | http://localhost:8000 |
| Frontend | `expense-frontend` | http://localhost:5173 |

The frontend container waits for the backend to start first (`depends_on`).

**4. Stop the containers**
```bash
docker compose down
```

<details>
<summary><code>docker-compose.yml</code></summary>

```yaml
services:
  backend:
    build:
      context: ./backend
    container_name: expense-backend
    ports:
      - "8000:8000"
    env_file:
      - ./backend/.env
    extra_hosts:
      - "host.docker.internal:host-gateway"

  frontend:
    build:
      context: ./frontend
    container_name: expense-frontend
    ports:
      - "5173:5173"
    depends_on:
      - backend
```

</details>

---

## 🔑 API Endpoints

### Authentication
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Log in a user |
| GET | `/api/auth/profile` | Get the current user's profile |

### Income
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/income/add` | Add an income record |
| GET | `/api/income` | Get all income records |
| DELETE | `/api/income/:id` | Delete an income record |

### Expenses
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/expense/add` | Add an expense record |
| GET | `/api/expense` | Get all expense records |
| DELETE | `/api/expense/:id` | Delete an expense record |

### Dashboard
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/dashboard` | Get aggregated dashboard analytics |

---

## 📊 Key Metrics Displayed
- Total income, total expenses, net balance
- Recent transactions
- Income and expense trends
- Spending categories
- Monthly financial activity

---

## 🔒 Security Features
- JWT authentication
- Password hashing with bcrypt
- Protected API routes via middleware
- Input validation
- Environment variables for secrets
- CORS configuration

---

## 🧪 Testing

A Postman collection is included at:
```text
postman/collections/52118816-ff7125a7-1b9e-472b-bfa9-3f130cee9d77.json
```
Import it into Postman to test the Authentication, Income, Expense, and Dashboard APIs end to end. Consider renaming it to something like `ExpenseTracker.postman_collection.json` for clarity if you re-export it later.

---

## 🚀 Future Enhancements
- Budget planning
- Recurring transactions
- Email notifications
- Export to PDF / Excel
- Multi-currency support
- Dark mode
- Mobile app version
- AI-powered spending insights
- Financial goal tracking

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
   ```bash
   git checkout -b feature/new-feature
   ```
3. Commit your changes
   ```bash
   git commit -m "Added new feature"
   ```
4. Push the branch
   ```bash
   git push origin feature/new-feature
   ```
5. Open a Pull Request

---

## 👨‍💻 Author

<div align="center">

**Aditya K U**
 Full Stack Developer · Machine Learning Enthusiast

[![GitHub](https://img.shields.io/badge/GitHub-AdityaKarippadathUdai-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/AdityaKarippadathUdai)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Aditya%20Udai-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/aditya-udai-a580a232a/)

</div>

---

## ⭐ Support

If this project was useful to you, consider showing some support:

⭐ Star the repository · 🍴 Fork it · 📢 Share it with others