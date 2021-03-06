"use strict";
//apiGatewayUrl: https://llvdp2x749.execute-api.us-east-1.amazonaws.com
//url:           https://llvdp2x749.execute-api.us-east-1.amazonaws.com
// eslint-disable-next-line import/no-unresolved
const express = require("express");

const app = express();

// Routes
app.get("/*", (req, res) => {
  res.send(`Request received: ${req.method} - ${req.path}`);
});

// Error handler
app.use((err, req, res) => {
  console.error(err);
  res.status(500).send("Internal Serverless Error");
});

module.exports = app;
