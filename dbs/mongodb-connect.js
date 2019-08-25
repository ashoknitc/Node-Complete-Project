const mongoose = require("mongoose");
mongoose.set({ useNewUrlParser: true });
mongoose.connect("mongodb://localhost:27017/mongo-rest-db", (err, db) => {
    if (err) throw err;
    console.log("Connection established");
});