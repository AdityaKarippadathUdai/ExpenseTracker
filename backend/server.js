require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const { connect } = require("http2");

const app = express();
const connectDB = require("./config/db");
const auhtRoutes = require("./routes/authRoutes");



// Middleware
app.use(
    cors(
        {
            origin:process.env.CLIENT_URL || "*",
            methods:["GET","POST","PUT","DELETE"],
            allowedHeaders:["Content-Type","Authorization"]
        }
    )
);

app.use(express.json());

connectDB();
app.use("/api/v1/auth",auhtRoutes);

// Serve uploads folder statically
app.use("/uploads",express.static(path.join(__dirname,"uploads")));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

