const express = require("express");
const cors = require("cors");

const whitelist = ["http://localhost:3000"];
var corsOptionsDelegate = (req, callback) => {
  // Check if incoming belongs to whitelist
  var corsOptions;

  if (whitelist.indexOf(req.header("Origin")) != -1) {
    corsOptions = { origin: true };
  } else {
    corsOptions = { origin: false }; // Origin will not be returned
  }
  callback(null, corsOptions);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);
