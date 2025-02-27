const express = require("express");
const app = express();
const port = 3000;
var request = require("request");
// docs: https://www.npmjs.com/package/request

const config = require("./config.js").token;

const apiCall = `http://api.openweathermap.org/data/2.5/weather?id=6173331&APPID=${config}`;

let results = null;
let rainValue = null;
request(apiCall, function(error, response, body) {
  console.log("error:", error); // Print the error if one occurred
  responce = JSON.parse(body);
  results = responce.weather[0];
  findMyRain(results);
});

const findMyRain = apiResult => {
  console.log(apiResult);
  let rainRegEx = RegExp("w*rain|Rainw*");
  let a = rainRegEx.test(apiResult.main);
  let b = rainRegEx.test(apiResult.description);
  a || b === true ? (rainValue = true) : (rainValue = false);
  return rainValue;
};

app.use(express.static("views"));
app.use(express.static("styles"));

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/", (req, res) => {
  let template = {
    rainValue
  };
  res.render("index.ejs", template);
});
