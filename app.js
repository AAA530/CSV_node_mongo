let express = require("express");
let body_parser = require("body-parser");
let mongoose = require("mongoose");
let csv = require("csv-express");
let methodOverride = require("method-override");
let app = express();

//models
let User = require("./models/Users");

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

mongoose.connect("mongodb://localhost/csv_node", (err, db) => {
  console.log("Db connected");
});

app.use(body_parser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(methodOverride("_method"));

let seedDB = require("./seed");
seedDB();
const PORT = 3000;

var UserRoutes = require("./routes/user");

app.use(UserRoutes);

app.listen(PORT, function () {
  console.log(`Running on ${PORT}`);
});
