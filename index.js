const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const http = require("http");
var request = require("request");
const config = require("./config.js").token;

// app.use(express.static("views"));
// app.use(express.static("styles"));

// app.get("/", (req, res) => res.render("index.ejs"));

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));
// http
//   .get(
//     `http://api.openweathermap.org/data/2.5/forecast?id=6173331&APPID=${config}`,
//     res => {
//       console.log(res);
//     }
//   )
//   .on("socket", socket => {
//     socket.emit("agentRemove");
//   });

const apiCall = `http://api.openweathermap.org/data/2.5/forecast?id=6173331&APPID=${config}`;

request(apiCall, function(error, response, body) {
  console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  console.log("body:", body); // Print the HTML for the Google homepage.
});

// const cityMap = fs.readFileSync("city.list.json");
// let workingVar = JSON.parse(cityMap);

// for (let i = 0; i < workingVar.length; i++) {
//   if (workingVar[i].name == "Vancouver") {
//     return console.log(workingVar[i]);
//   }
// }

// { id: 6173331,
//     name: 'Vancouver',
//     country: 'CA',
//     coord: { lon: -123.119339, lat: 49.24966 } }
