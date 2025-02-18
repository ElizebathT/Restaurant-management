const express=require("express");
const userRoutes = require("./userRouter");
const restaurantRoutes = require("./restaurantRouter");
const cartRouter = require("./cartRoutes");
const menuRouter = require("./menuRoutes");
const orderRouter = require("./orderRoutes");
const employeeRouter = require("./employeeRoutes");
const notifyRouter = require("./notificationRoutes");
const router=express()

router.use("/users", userRoutes);
router.use("/restaurant", restaurantRoutes);
router.use("/menu", menuRouter);
router.use("/cart", cartRouter);
router.use("/order", orderRouter);
router.use("/employee", employeeRouter);
router.use("/notifications", notifyRouter);

module.exports=router