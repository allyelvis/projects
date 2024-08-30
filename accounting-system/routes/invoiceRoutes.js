const express = require('express');
const { createInvoice } = require('../controllers/invoiceController');
const auth = require('../middlewares/authMiddleware');
const router = express.Router();
router.post('/create', auth, createInvoice);
module.exports = router;
