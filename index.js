const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

require("dotenv").config();

const app = express();

app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

require("./controller/authController")(app);

app.listen(3000);
