const config = require('config');
const mongoURI = config.get('mongoURI');
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false
    });

    console.log('MongoDB connected!');
  } catch (error) {
    console.error(error.message);

    // Exit process with failure
    process.exit(1);
  };
};

module.exports = connectDB;
