import express from "express";
import { home } from "../controller/home.js";
import { about } from "../controller/about.js";
import { resume } from "../controller/controller/resume.js";
import { service } from "../controller/service.js";
import { portfolio } from "../controller/portfolio.js";
import { contact,usercontact } from "../controller/contact.js";
const route = express.Router();

route.get('/',home);
route.get('/about',about);
route.get('/resume',resume);
route.get('/service',service);
route.get('/portfolio',portfolio);
route.get('/contact',contact);
route.post('/contact',usercontact);

    export default route;