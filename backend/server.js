const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
let cors = require("cors");
require("dotenv").config();
const Stripe = require("stripe")(process.env.SECRET_KEY);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const port = process.env.PORT || 5000;

app.use("/stripe", require("./routes/stripe"));

app.listen(port, () => {
  console.log(`Server running at port:${port}`);
});
