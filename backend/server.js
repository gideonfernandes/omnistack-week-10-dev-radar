const express = require('express');

const app = express();

app.use(express.json({ extended: false }));

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World!' });
});

const PORT = process.env.PORT || 8888;

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
