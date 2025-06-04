const express = require('express');
const router = express.Router();
const themeController = require('../controllers/themeController');

router.get('/', themeController.getAllThemes);
router.get('/:themeID', themeController.getThemeByID);
router.post('/', themeController.createTheme);
router.put('/:themeID', themeController.updateTheme);
router.delete('/:themeID', themeController.deleteTheme);

module.exports = router;
