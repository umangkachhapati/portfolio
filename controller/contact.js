import mongoose from "mongoose";
import contactschema from "../models/schema.js";
const ContactModel = mongoose.model("contacts",contactschema);
const  contact= (req, res) => {
    try{
        res.render('contact');
    } catch (error){
        console.log(error.message);
    }
};

const  usercontact = async(req, res) => {
    try{
        console.log(req.body);
        const user = new ContactModel({
          name: req.body.name,
          email: req.body.email,
          subject: req.body.subject,
          message: req.body.message,
        });
        if(user){
            await user.save();
            console.log("Contact Saved!");
        }
        else{
            console.log("Contact data not found!");
        }
        console.log(req.body)
        res.redirect('/contact');
    } catch (error){
        console.log(error.message);
        res.status(500).send("Server Error: "+ error.message);
    }
};
export {contact,usercontact};