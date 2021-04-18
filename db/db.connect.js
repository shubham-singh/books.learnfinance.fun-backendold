const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://shubham:2pQQtOwM1yQNQInq@neog-cluster.wiph4.mongodb.net/inventory';
// const dbURI = 'mongodb+srv://shubham:2pQQtOwM1yQNQInq@neog-cluster.wiph4.mongodb.net/test';

const dbConnect = async () => {
  try {
    const connection = await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('successfully connected to databse');
  } catch (error) {
    console.log("Database connection failed");
  }
}

module.exports = dbConnect;