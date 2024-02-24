const mongoose = require("mongoose");

// db connection
const connect = async () => { 
    try {
        mongoose.connect('mongodb+srv://admin:admin@cluster0.mqbayp8.mongodb.net/node-app').then(() => {
        console.log('Mongo connected');
        });
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = connect;