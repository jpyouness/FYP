const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  categoryID: {
    type: String,
    required: true,
  },
  device_identifier: {
    type: String,
    required: true,
    unique: true,
  },
  last_update_at: {
    type: Date,
    default: Date.now,
  },
}, {
  collection: 'Users' 
});

module.exports = mongoose.model('User', userSchema);
