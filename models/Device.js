const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
  categoryID: {
    type: String,
    required: true,
  },
  device_identifier: {
    type: String,
    required: true,
    unique: true,
  },
}, {
  collection: 'devices' 
});

module.exports = mongoose.model('devices', deviceSchema);
