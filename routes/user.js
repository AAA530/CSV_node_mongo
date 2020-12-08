var express = require("express");
var router = express.Router();

let User = require("./../models/Users");

router.get("/", (req, res) => {
  User.find({}, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      res.render("index", { users: user });
    }
  });
  // res.render("index");
});

router.get("/user", (req, res) => {
  res.render("add_users");
});

router.post("/user", (req, res) => {
  let name = req.body.name;
  let number = req.body.number;
  let address = req.body.address;
  let myobj = { name: name, phone: number, address: address };

  console.log(myobj);
  User.create(myobj, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      res.redirect("/");
    }
  });
});

router.get("/user/:id/edit", (req, res) => {
  let id = req.params.id;
  User.findById(id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      res.render("update_user", { user: data });
    }
  });
});

router.post("/user/:id/edit", (req, res) => {
  let name = req.body.name;
  let number = req.body.number;
  let address = req.body.address;
  let myobj = { name: name, phone: number, address: address };

  console.log(myobj);
  User.findByIdAndUpdate(req.params.id, myobj, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      res.redirect("/");
    }
  });
});

router.post("/user/:id/delete", (req, res) => {
  let id = req.params.id;
  User.findByIdAndDelete(id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      res.redirect("/");
    }
  });
});

router.get("/exportcsv", function (req, res, next) {
  let filename = "User.csv";

  User.find({})
    .lean()
    .exec({}, function (err, user) {
      if (err) {
        console.log(err);
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/csv");
        res.setHeader(
          "Content-Disposition",
          "attachment; filename=" + filename
        );
        res.csv(user, true);
      }
    });
});

module.exports = router;
