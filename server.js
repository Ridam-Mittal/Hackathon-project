import express from "express"
import colors from "colors"
import dotenv from "dotenv"

// configure dotenv
dotenv.config();
// rest api
const app = express()

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
