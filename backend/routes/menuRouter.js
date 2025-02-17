const express = require("express");
const userAuthentication = require("../middlewares/userAuthentication");
const menuController = require("../controllers/menuController");
const menuRoutes = express.Router();

menuRoutes.post("/save", userAuthentication, menuController.saveMenu);
menuRoutes.post("/add", userAuthentication, menuController.addMenuItem);
menuRoutes.get("/view", userAuthentication, menuController.getMenu);
menuRoutes.delete("/delete", userAuthentication, menuController.deleteMenu);

module.exports = menuRoutes;
