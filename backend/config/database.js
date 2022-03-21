const mongoose = require('mongoose');

exports.connectDatabase = _ => {
 mongoose.connect(process.env.MONGO_URI);
};