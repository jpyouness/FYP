const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
  },
  categoryID: {
    type: String,
    required: true,
    unique: true,
  },
  message: {
    type: String,
  },
  enabled: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model('Category', categorySchema);
