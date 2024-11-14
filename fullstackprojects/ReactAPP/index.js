const express = require("express");
const app = express();


// const Item = require('./models/items');
require("dotenv").config();
const mongoose = require("mongoose");


// const path = require('path');
const PORT = process.env.PORT || 8000;


const itemRoute = require("./routes/trainer");


const cors = require('cors');

app.use(cors()); //by default all origins



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/trainer", itemRoute);


//allow multiple origins
const allowedOrigins = ['http://localhost:3000', 'http://example.com'];

const corsOptions = {
	origin: (origin, callback) => {
		if (allowedOrigins.includes(origin) || !origin) {
			callback(null, true);
		} else {
			callback(new Error('Not allowed by CORS'));
		}
	}
};


mongoose
  .connect(process.env.MONGO_URL)
  .then((e) => console.log("MongoDB Connected"))
  .catch((e) => console.log(e));

app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));
