import express from "express";
import colors from "colors";//const colors= require('colors');
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes.js";
//rest object
const app = express();

//configure,calling env
dotenv.config();

//database config
connectDB();

//? middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);

//rest api
app.get("/", (req, res) => {
    res.send("<h1>Welcome to mcq test platform</h1>");
  }); 
  
  //PORT
  const PORT = process.env.PORT || 8000;//process by deafault comes with node
  
  //run listen
  app.listen(PORT, () => {
    console.log(
      `Server Running on ${PORT}`.bgCyan.white
    );
  });