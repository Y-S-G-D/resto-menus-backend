import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import indexRoute from "./routes/index";
import errorHandler from "./middlewares/errorHandler";
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
const PORT = process.env.PORT;
const API_VERSION = process.env.API_VERSION;
app.use(`/${API_VERSION}`, indexRoute);




app.use(errorHandler)


  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
