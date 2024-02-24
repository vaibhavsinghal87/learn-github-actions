const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let usersSchema = new Schema(
    {
        _id: {
            type: Object,
        },
        name: {
            type: String,
        },
        age: {
            type: Number
        },
        totalAge: {
            type: Number
        },
        phone: {
            type: String,
        },
        hobbies: {
            type: Array,
        },
        isSporty: {
            type: Boolean,
        }
    },
    { timestamps: true }
);

let Users = mongoose.model("users", usersSchema);

module.exports = Users;