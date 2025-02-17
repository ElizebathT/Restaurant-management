const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant",
        required: true
    },
    items: [
        {
            name: { type: String, required: true },
            description: { type: String },
            price: { type: Number, required: true },
            category: { type: String, required: true },
            image: { type: String }, // URL or file path
            available: { type: Boolean, default: true }
        }
    ]
}, { timestamps: true });

const Menu = mongoose.model("Menu", menuSchema);
module.exports = Menu;
