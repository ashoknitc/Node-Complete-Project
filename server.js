const express = require("express");
const socketIO = require("socket.io");
const http = require("http");
const path = require("path");
var app = express();
var server = http.createServer(app);
var io = socketIO(server);
const publicPath = path.join(__dirname, "/public");
app.use(express.static(publicPath));
io.on("connection", (socket) => {
    console.log("New User Connected");
    socket.on("disconnect", () => {
        console.log("User Disconnected");
    });
});
server.listen(3001, () => {
    console.log("http://localhost:3000");
});
console.log("PublicPath= " + publicPath);