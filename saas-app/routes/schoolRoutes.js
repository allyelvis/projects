const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schoolController');

router.get('/students', schoolController.getStudents);
router.post('/students', schoolController.addStudent);

module.exports = router;
