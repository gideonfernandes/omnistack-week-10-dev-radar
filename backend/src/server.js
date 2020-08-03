const express = require('express');
const connectDB = require('../config/db');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// Connect MongoDB
connectDB();

// Init cors middleware
app.use(cors());

// Init JSON body middleware
app.use(express.json({ extended: false }));

// Init routes middleware
app.use(routes);

const PORT = process.env.PORT || 8888;

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
