const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONT,
    optionsSuccessStatus: 200,
  })
);

app.use("/api", (req, res) => {
  axios.get(process.env.API_URL).then((response) => {
    res.send(response.data);
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`App listening on port ${process.env.PORT}!`);
});

module.exports = app;
