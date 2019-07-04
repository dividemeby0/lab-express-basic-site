const express = require("express");
const app = express();
const mongoose = require("mongoose");
const hbs          = require('hbs');
const path         = require('path');
// const seeds = require("./bin/seeds");
const Skater = require("./models/skater");
const skaterModel = require("./models/skater");

app.get("/", (request, response) => {
  response.render(__dirname + "/views/index.hbs");
});

app.get("/about", (req, res) => {
  res.render(__dirname + "/views/about.hbs");
});

app.get("/gp101", (req, res) => {
  res.render(__dirname + "/views/gp101.hbs")
});

mongoose
  .connect('mongodb://localhost/idf2019', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "idf-2019"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

app.get("/gallery", (req, res) => {
  skaterModel.find()
  .then(dbRes => {
    res.render("gallery", { skaters: dbRes });
  })
  .catch(dbErr => console.log(dbErr));
});

app.get("/gallery/:id", (req, res) => {
  Skater.findById(req.params.id)
  .then(oneSkater => {
    res.render("skater-details", { oneSkater })
  })
  .catch(dbErr => console.log(dbErr));
});


app.use(express.static("public"));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

// Skater.insertMany(seeds)
// .then(res => {
//   console.log("skaters added");
// })
// .catch(err => {
//   console.log("error adding skaters");
// });

app.listen(9997);
console.log("server is running @: http://localhost:9997");

module.exports = app;