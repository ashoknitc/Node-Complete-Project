var mongoose = require("mongoose");
const validator = require("validator");
var RoleSchema = mongoose.Schema({
    _id: {
        type: Number,
        default: new Date().getMilliseconds()
    },
    title: {
        type: String,
        require: true,
        unique: [true, "Enter Unique Role_tite"]
    }
});
var RoleInfo = mongoose.model("role", RoleSchema);
module.exports = RoleInfo;