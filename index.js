const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("views"));
app.use(express.static("styles"));

app.get("/", (req, res) => res.render("index.ejs"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
