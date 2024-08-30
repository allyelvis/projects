const Transaction = require('../models/Transaction');

// Add Transaction
const addTransaction = async (req, res) => {
    const { type, amount, description } = req.body;
    try {
        const transaction = new Transaction({
            user: req.user.id,
            type,
            amount,
            description,
        });
        await transaction.save();
        res.json(transaction);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

module.exports = { addTransaction };
