const express = require("express");
const routesprotects = express.Router();

const authMiddleware = require("./app/middlewares/auth");
const UserController = require("./app/Controllers/UserController");

routesprotects.use(authMiddleware);

// routesprotects.put("/pass", UserController.updatePass);

module.exports = routesprotects;
