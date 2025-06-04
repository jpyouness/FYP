// controllers/themeController.js
const Theme = require('../models/Theme');

// GET all themes
exports.getAllThemes = async (req, res) => {
  try {
    const themes = await Theme.find();
    res.status(200).json(themes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch themes' });
  }
};

// GET one theme by themeID
exports.getThemeByID = async (req, res) => {
  try {
    const theme = await Theme.findOne({ themeID: req.params.themeID });
    if (!theme) {
      return res.status(404).json({ error: 'Theme not found' });
    }
    res.status(200).json(theme);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching theme' });
  }
};

// POST create a new theme
exports.createTheme = async (req, res) => {
  try {
    const { themeID, themeName } = req.body;

    const existing = await Theme.findOne({ themeID });
    if (existing) {
      return res.status(400).json({ error: 'themeID already exists' });
    }

    const theme = new Theme({ themeID, themeName });
    await theme.save();

    res.status(201).json(theme);
  } catch (error) {
    res.status(500).json({ error: 'Error creating theme' });
  }
};

// PUT update a theme by themeID
exports.updateTheme = async (req, res) => {
  try {
    const { themeName } = req.body;
    const updated = await Theme.findOneAndUpdate(
      { themeID: req.params.themeID },
      { themeName },
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ error: 'Theme not found' });
    }
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Error updating theme' });
  }
};

// DELETE a theme by themeID
exports.deleteTheme = async (req, res) => {
  try {
    const deleted = await Theme.findOneAndDelete({ themeID: req.params.themeID });
    if (!deleted) {
      return res.status(404).json({ error: 'Theme not found' });
    }
    res.status(200).json({ message: 'Theme deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting theme' });
  }
};
