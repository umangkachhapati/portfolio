const mongoose = require("mongoose");
// Ensure this path exactly matches where your schema file is stored
const contactschema = require("../models/schema.js"); 

const ContactModel = mongoose.model("contacts", contactschema);

// GET controller to render the contact page
const contact = (req, res) => {
    try {
        res.render('contact');
    } catch (error) {
        console.error("Render Error:", error.message);
        res.status(500).send("Internal Server Error");
    }
};

// POST controller to handle form submissions
const usercontact = async (req, res) => {
    try {
        console.log("Form Submission Data:", req.body);
        
        const { name, email, subject, message } = req.body;

        // Correct way to validate incoming form data
        if (!name || !email || !subject || !message) {
            console.log("Contact data incomplete or not found!");
            return res.status(400).send("All form fields are required.");
        }

        const user = new ContactModel({ name, email, subject, message });
        await user.save();
        
        console.log("Contact Saved!");
        res.redirect('/contact');

    } catch (error) {
        console.error("Database Error:", error.message);
        res.status(500).send("Server Error: " + error.message);
    }
};

// Crucial: Export both functions using CommonJS format
module.exports = { contact, usercontact };
