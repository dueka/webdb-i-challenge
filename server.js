const express = require("express");

const AccountsRouter = require("./accounts/accounts-router.js");

const server = express();

server.use(express.json());

server.use("/api/accounts", AccountsRouter);

server.get("/", (req, res) => {
  res.send("<h4>Creating DB Helpers with Knex</h4>");
});

module.exports = server;
