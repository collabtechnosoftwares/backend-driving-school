import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import bodyParser from "body-parser";
import DbConnection from "./config/db.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();

const server = express();
const PORT = process.env.PORT || 5000;

// Middleware
server.use(cors());
server.use(express.json()); // Built-in body parser

// Routes

server.get("/", (req, res) => {
  return res.send("Server is Live");
});

server.use("/api/admin", adminRoutes);
server.use("/api/user", adminRoutes);
server.use("/api/auth", adminRoutes);

server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
  DbConnection.once("open", () => {
    console.log("Database connected successfully.");
  });
});
