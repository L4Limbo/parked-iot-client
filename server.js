const express = require("express");
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + "/dist/"));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://parked-iot-project.herokuapp.com/"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get(/.*/, function(req, res) {
  res.sendfile(__dirname + "/dist/index.html");
});
app.listen(port);

console.log("Server started...");