const express = require("express");
const routesprotects = express.Router();

const authMiddleware = require("./app/middlewares/auth");
const UserController = require("./app/Controllers/UserController");
const MeetupController = require("./app/Controllers/MeetupController");
const InfoController = require("./app/Controllers/InfoController");

routesprotects.use(authMiddleware);

// routesprotects.put("/pass", UserController.updatePass);
routesprotects.post("/meetups", MeetupController.store);
routesprotects.get("/meetup", MeetupController.list);
routesprotects.get("/find", InfoController.find);

module.exports = routesprotects;
