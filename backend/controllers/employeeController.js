const Restaurant = require("../models/restaurantModel");
const asyncHandler = require("express-async-handler");

const restaurantController={

    addEmployee : asyncHandler(async (req, res) => {
    const { employeeId } = req.body;
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
        res.status(404);
        throw new Error("Restaurant not found");
    }
    
    if (restaurant.owner.toString() !== req.user.id.toString()) {
        res.status(403);
        throw new Error("Not authorized to modify employees");
    }

    if (!restaurant.employees.includes(employeeId)) {
        restaurant.employees.push(employeeId);
        await restaurant.save();
    }
    res.json(restaurant);
}),

    removeEmployee : asyncHandler(async (req, res) => {
    const { employeeId } = req.body;
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
        res.status(404);
        throw new Error("Restaurant not found");
    }
    
    if (restaurant.owner.toString() !== req.user._id.toString()) {
        res.status(403);
        throw new Error("Not authorized to modify employees");
    }

    restaurant.employees = restaurant.employees.filter(emp => emp.toString() !== employeeId);
    await restaurant.save();
    res.json(restaurant);
})
}
module.exports=restaurantController