const express = require("express");
const app = express();
// const Item = require('./models/items');
require("dotenv").config();
const mongoose = require("mongoose");
// const path = require('path');
const PORT = process.env.PORT || 8000;
const itemRoute = require("./routes/items");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/items", itemRoute);
mongoose
  .connect(process.env.MONGO_URL)
  .then((e) => console.log("MongoDB Connected"))
  .catch((e) => console.log(e));

app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));
