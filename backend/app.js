const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const { requireAuth, checkUser } = require("./middleware/authMiddleware");
const cors = require("cors");

const app = express();

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
app.use("*", checkUser);
app.use(cors());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
// database connection
const dbURI = "mongodb://127.0.0.1:27017/pucon";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(3000, () => console.log("Server is running on port 3000"));
  })
  .catch((err) => console.log(err));

// routes
app.use(authRoutes);
