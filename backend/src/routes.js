const express = require("express");
const routes = express.Router();
const handle = require("express-async-handler");
const UserController = require("./app/Controllers/UserController");
const SessionController = require("./app/Controllers/SessionController");

routes.post(
  "/users",
  handle(async (req, res, next) => {
    UserController.store(req, res, next);
  })
);

routes.post("/", SessionController.store);

module.exports = routes;
