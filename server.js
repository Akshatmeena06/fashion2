
const express = require("express");
const colors = require("colors"); // Renamed to `colors` for clarity
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const rootroute = require("./routes/rootroute");
const connectdb = require("./config/db"); // Ensure this path is correct
const productroute=require("./routes/productroute")
// Initialize the connection to the database
connectdb();

const PORT = process.env.PORT || 3000; // Keep only one fallback port
const app = express();

app.use(morgan('dev')); // Use morgan for logging

app.use("/",rootroute )
app.use("/fashion",productroute );

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`.green);
});

