const express = require("express");
const mongoose = require("mongoose");
const viewRoutes = require("./routes/viewRoutes.js");
const apiRoutes = require("./routes/apiRoutes.js")

const PORT = process.env.PORT || 3030;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(viewRoutes);
app.use(apiRoutes);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });