const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
let cors = require("cors");
require("dotenv").config();
const Stripe = require("stripe")(process.env.SECRET_KEY);
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const port = process.env.PORT || 6000;

mongoose
  .connect(
    "mongodb+srv://rohan:0O2lJxRpmT7dN1qe@cluster0.cg0nv1p.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

app.use("/stripe", require("./routes/stripe"));
app.use("/crops", require("./routes/crop"));

app.listen(port, () => {
  console.log(`Server running at port:${port}`);
});

//0O2lJxRpmT7dN1qe
