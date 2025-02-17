const express=require("express");
const userRoutes = require("./userRouter");
const restaurantRoutes = require("./restaurantRouter");
const menuRoutes = require("./menuRouter");
const router=express()

router.use("/users", userRoutes);
router.use("/restaurant", restaurantRoutes);
router.use("/menu", menuRoutes);

module.exports=router