const express = require("express");
const mongoose = require("../../dbs/mongodb-connect");
const RoleInfo = require("../models/Role_Info");
const formidable = require("express-formidable");
var router = express.Router();

//get all roles information
router.get("/get/roles", (req, res) => {
    RoleInfo.find().then((doc) => {
        if (!doc) {
            res.status(404).send("Not Found");
        }
        res.status(200).send(doc);
    }).catch((err) => {
        res.status(500).send("Internal Server Error");
    });
});
//add role information
router.use(formidable());
router.post("/add/role", (req, res) => {
    var roleData = new RoleInfo(req.fields);
    roleData.save().then((result) => {
        if (!result) {
            res.status(404).send("Not Found");
        }
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send("Internal Server Error");
    });
});
router.delete("/delete/role/:id", (req, res) => {
    RoleInfo.findByIdAndRemove(req.params.id).then((result) => {
        if (!result) {
            res.status(404).send("Not Found");
        }
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send("Internal Server Error");
    });
});
module.exports = router;