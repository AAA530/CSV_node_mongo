var mongoose = require("mongoose");
let User = require("./models/Users");

var data = [
  {
    name: "Dhairya",
    phone: "9333222111",
    address: "gandhinagar",
  },
  {
    name: "User1",
    phone: "7333222111",
    address: "Surat",
  },
  {
    name: "User2",
    phone: "6333222111",
    address: "Delhi",
  },
  {
    name: "User4",
    phone: "8733252111",
    address: "Rajasthan",
  },
];

function seedDB() {
  // Remove all Users
  User.deleteMany({}, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("removed sucessfully");
      //add new data into database;
      data.forEach((seed) => {
        User.create(seed, (err, user) => {
          if (err) {
            console.log(err);
          } else {
            console.log("Users added");
          }
        });
      });
    }
  });
}

module.exports = seedDB;
