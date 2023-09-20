const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://root:root@cluster0.4brnzrd.mongodb.net/booksearchDB');

module.exports = mongoose.connection;
