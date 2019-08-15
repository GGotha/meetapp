const express = require("express");
const routes = express.Router();

const UserController = require("./app/Controllers/UserController");

routes.post("/users", UserController.store);

module.exports = routes;
