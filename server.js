require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Import local modules using CommonJS (require)
const route = require('./routes/route');
const connectDB = require('./db/db');

const app = express();
const port = process.env.PORT || 5000;

// Database connection
connectDB(process.env.MONGO_URI);

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup EJS template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Setup static files folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', route);

// Export app for Vercel serverless deployment
module.exports = app;

// Local development listener
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
