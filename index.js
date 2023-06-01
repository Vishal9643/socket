const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const app = express();

const expressServer = http.createServer(app);
const io = new Server(expressServer);

io.on(`connection`, (socket) => {
  console.log("A user connected");

  // setInterval(() => {
  //   let date = new Date();
  //   let time = date.getTime();
  //   socket.emit("timeEvent", time);
  // }, 1000);

  // setTimeout(() => {
  //   socket.send("Hi from Vishal (Server to client");
  // }, 10000);

  socket.on("disconnect", () => {
    console.log("User Disconnected");
  });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

expressServer.listen(3000, () => {
  console.log("listening on port number 3000");
});
