
const mongoose = require("mongoose");

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        // console.log(process.env.PORT)

        console.log("Database is connected".green);
    } 
    catch (error) {
     
        console.log("Database is not connected".red);
  
    }
};

module.exports = connectdb;
