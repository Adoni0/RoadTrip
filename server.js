require("dotenv").config();
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();


//Setting up server and adding socketIo middleware
const server = http.createServer(app);
const io = socketIo(server);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
<<<<<<< HEAD
    app.use(express.static("client/public"));
=======
  app.use(express.static("client/build"));
>>>>>>> master
}

app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost:27017/roadtripdb", { useNewUrlParser: true, useUnifiedTopology: true }
);

// // Send every other request to the React app
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

//Setting up a socket with the namespace "connection" for new sockets
io.on("connection", socket => {
  console.log("New client connected");

  //Here we listen on a new namespace called "incoming data"
  socket.on("incoming data", data => {
    console.log(`Logging data, ${data}`);

    //Here we broadcast it out to all other sockets EXCLUDING the socket which sent us the data
    // socket.broadcast.emit('outgoing data', {
    //   tripData: data.tripData
    // });

    // We send the data to everyone, including the sender.
    io.emit('incoming data', {
      tripData: data.tripData
    });
  });

  //A special namespace "disconnect" for when a client disconnects
  socket.on("disconnect", () => console.log("Client disconnected"));
});

//Capture All 404 errors
app.use(function (req, res, next) {
  res.status(404).send('Unable to find the requested resource!');
});

server.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});