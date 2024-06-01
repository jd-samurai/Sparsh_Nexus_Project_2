const mongoose = require('mongoose');
const connect = mongoose.connect("mongodb+srv://<sparshsomani>:<ZrsvKYw9mgE9m3R>@cluster0.y3z92ip.mongodb.net/?");
// mongodb://localhost:27017
// Check database connected or not
"mongodb+srv://<sparshsomani>:<ZrsvKYw9mgE9m3R>@cluster0.y3z92ip.mongodb.net/?"
connect.then(() => {
    console.log("Database Connected Successfully");
})
.catch(() => {
    console.log("Database cannot be Connected");
})

// Create Schema
const Loginschema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// collection part
const collection = new mongoose.model("users", Loginschema);

module.exports = collection;