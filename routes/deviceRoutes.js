const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/deviceController');

// GET all users
router.get('/', deviceController.getAll, deviceController.getAllDevices);

// GET one user by ID
router.get('/:id', deviceController.getDeviceById);

// POST create new user
router.post('/', deviceController.createDevice);

module.exports = router;
