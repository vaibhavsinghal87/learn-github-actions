const mongoose = require("mongoose");

const host = process.env.MONGO_HOSTNAME;
const user = process.env.MONGO_USERNAME;
const pwd = process.env.MONGO_PWD;
// db connection
const connect = async () => { 
    try {
        mongoose.connect(`mongodb+srv://${user}:${pwd}@${host}/shop`).then(() => {
        console.log('Mongo connected');
        });
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports.connect = connect;