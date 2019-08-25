const express = require("express");
var app = express();
app.use("/role-service", require("./mongo-rest-api/controllers/Role_Controller"));
app.listen(3001, () => {
    console.log("listening at http://localhost:3001");
});