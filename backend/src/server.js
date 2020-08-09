const express = require('express');
const connectDB = require('../config/db');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebSocket } = require('./websocket');

const app = express();
const server = http.Server(app);

// Init Websocket
setupWebSocket(server);

// Connect MongoDB
connectDB();

// Init cors middleware
app.use(cors());

// Init JSON body middleware
app.use(express.json({ extended: false }));

// Init routes middleware
app.use(routes);

const PORT = process.env.PORT || 8888;

server.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
