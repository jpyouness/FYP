const mongoose = require('mongoose');

const ThemeSchema = new mongoose.Schema(
  {
    themeID: {
      type: String,
      required: true,
      unique: true
    },
    themeName: {
      type: String,
      required: true
    }
  },
  {
    collection: 'Themes'
  }
);

module.exports = mongoose.model('Theme', ThemeSchema);
