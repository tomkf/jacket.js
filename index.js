const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const http = require("http");
var request = require("request");
// docs: https://www.npmjs.com/package/request

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

const apiCall = `http://api.openweathermap.org/data/2.5/weather?id=6173331&APPID=${config}`;

let results = null;
let rainValue = false;

request(apiCall, function(error, response, body) {
  console.log("error:", error); // Print the error if one occurred
  responce = JSON.parse(body);
  results = responce.weather[0];
  findMyRain(results);
});

const findMyRain = apiResult => {
  console.log("this is a calllback", apiResult);
  let rainRegEx = RegExp("w*rain|Rainw*");
  console.log(rainRegEx.test(apiResult.main));
  console.log(rainRegEx.test(apiResult.description));
};

// { id: 6173331,
//     name: 'Vancouver',
//     country: 'CA',
//     coord: { lon: -123.119339, lat: 49.24966 } }
