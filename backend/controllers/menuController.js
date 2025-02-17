const Menu = require("../models/menuModel");
const asyncHandler = require("express-async-handler");
const Restaurant = require("../models/restaurantModel");

const menuController = {
    // Get menu for a specific restaurant
    getMenu: asyncHandler(async (req, res) => {
        const { id } = req.body;
        const menu = await Menu.findOne({ restaurant: id });

        if (!menu) {
            throw new Error("Menu not found");
        }
        res.send(menu);
    }),

    // Add or update menu for a restaurant
    saveMenu: asyncHandler(async (req, res) => {
        const { id } = req.body;
        const { items } = req.body;

        let menu = await Menu.findOne({ restaurant: id });
        const restaurant=await Restaurant.findById(id)
        if (menu) {
            // Update existing menu
            menu.items = items || menu.items;
        } else {
            // Create new menu
            menu = new Menu({ restaurant: id, items });
            restaurant.menu = menu._id;
            await restaurant.save();
        }

        const savedMenu = await menu.save();
        res.send({ message: "Menu saved successfully", menu: savedMenu });
    }),

    // Delete menu for a specific restaurant
    deleteMenu: asyncHandler(async (req, res) => {
        const { id } = req.body;
        await Menu.findOneAndDelete({ restaurant: id });
        res.send({ message: "Menu deleted successfully" });
    }),

    addMenuItem : asyncHandler(async (req, res) => {
        const { id, items } = req.body;
        let menu = await Menu.findOne({ restaurant:id });
    
        if (!menu) {
            menu = new Menu({ restaurant, items });
        } else {
            menu.items.push(...items);
        }
    
        await menu.save();
        res.send("Menu item(s) added successfully");
    })
};

module.exports = menuController;
