const express = require('express');
const connectDB = require('../config/db');

const app = express();

// Connect MongoDB
connectDB();

// Initi Middleware
app.use(express.json({ extended: false }));

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World!' });
});

const PORT = process.env.PORT || 8888;

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
