// index.js - Lab 6
// Author: Madison Xiong
// Date: 04/25/24

// Constants
const myTransport = [
  "car", "bus", "walk"
];

let myMainRide = {
  make: "Honda",
  model: "Civic",
  color: "Silver",
  year: 1999,
  age: function() {
    return 2024 - this.year;
  }
};

// Output
document.writeln("How I get around: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");