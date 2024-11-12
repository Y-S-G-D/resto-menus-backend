import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import dbConnect from "./config/dbConnect";

/// import routers
import menus from "./routes/menus";
import seed from "./routes/seed";
import outlet from "./routes/outlet";
// Load environment variables
dotenv.config();

// Initialize Express
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// Routes
app.get("/health-check", (req, res) => {
  res.json({ message: "Server is running fine" });
});

// Port
const PORT = process.env.PORT || 3003;

// Routes
app.use("/menus", menus);
app.use("/seed", seed);
app.use("/outlet", outlet);





// Connect to MongoDB
dbConnect()
  .then(() => {
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
