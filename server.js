const express = require("express");
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + "/dist/"));
// app.use(function(req, res, next) {
//   res.set('Access-Control-Allow-Origin', 'http://localhost:8080');
//   next();
// });

app.get(/.*/, function(req, res) {
  res.sendfile(__dirname + "/dist/index.html");
});
app.listen(port);

console.log("Server started...");