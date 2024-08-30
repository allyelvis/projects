const express = require('express');
const { addTransaction } = require('../controllers/transactionController');
const auth = require('../middlewares/authMiddleware');
const router = express.Router();
router.post('/add', auth, addTransaction);
module.exports = router;
