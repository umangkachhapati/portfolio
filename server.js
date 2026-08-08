import'dotenv/config';
import express from "express";
import route from "./routes/route.js";
import connectDB from "./db/db.js";
import path from 'path';
import bodyparser from "body-parser";
const app = express();
const port = 5000;

//database connection
connectDB(process.env.MONGO_URI);

// body parser
app.use(bodyparser.urlencoded())


//setup ejs template
app.set('views','./views');
app.set('view engine','ejs');

//setup static file
 app.use(express.static(path.join(process.cwd(),'public')));

//route
app.use('/',route);

app.listen(port,()=>(
console.log('Server is running at https://localhost:${port}')
))