const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://niralprajapati06_db_user:BUCoYXGxSivm0IIe@cluster0.jnxp1ws.mongodb.net/Model_1'
    );
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

module.exports = connectDB 