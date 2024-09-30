import validator from "validator";
import jwt from 'jsonwebtoken';
import orderModel from "../models/orderModel.js"; // Assuming you have an Order model

// Route for guest checkout
const guestCheckout = async (req, res) => {
    try {
        const { email, cartItems, shippingDetails, paymentInfo } = req.body;

        // Validate email format
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }

        // Process the order (you can add more validations as necessary)
        const newOrder = new orderModel({
            email, // Save the email even if the user is not registered
            cartItems,
            shippingDetails,
            paymentInfo,
            status: 'Processing',
        });

        const order = await newOrder.save();

        res.json({ success: true, message: "Order placed successfully", order });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { guestCheckout };
