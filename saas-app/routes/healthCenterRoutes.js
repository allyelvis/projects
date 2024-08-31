const express = require('express');
const router = express.Router();
const healthCenterController = require('../controllers/healthCenterController');

router.get('/patients', healthCenterController.getPatients);
router.post('/patients', healthCenterController.addPatient);

module.exports = router;
