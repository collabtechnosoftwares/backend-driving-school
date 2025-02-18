import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import DbConnection from "./Configs/db.config.js";

dotenv.config();

const server = express();
const PORT = process.env.PORT || 2025;

server.use(
  cors({
    origin: ["*"],
  })
);

server.get("/", (req, res) => {
  return res.send("Server is Live");
});

server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
  DbConnection.once("open", () => {
    console.log("Database connected successfully.");
  });
});
