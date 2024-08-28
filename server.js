import express from "express"
import colors from "colors"
import dotenv from "dotenv"
import morgan from "morgan"
import connectDB from "./config/db.js";
import authRoutes from "./routes/authroute.js"

// configure dotenv
dotenv.config();

// rest object
const app = express()

// database config
connectDB();


// middlewares
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/auth", authRoutes);

// rest api
app.get('/', (req, res) => {
    res.send(
        "<h1>Welcome to CarbonMitra</h1>");
});

// PORT
const PORT = process.env.PORT || 7000;

// run listen
app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`.bgCyan.white);
    
})
