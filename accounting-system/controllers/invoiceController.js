const Invoice = require('../models/Invoice');

// Create Invoice
const createInvoice = async (req, res) => {
    const { items, total } = req.body;
    try {
        const invoice = new Invoice({
            user: req.user.id,
            items,
            total,
        });
        await invoice.save();
        res.json(invoice);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

module.exports = { createInvoice };
