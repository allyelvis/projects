const mongoose = require('mongoose');
const TransactionSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    type: { type: String, required: true }, // 'credit' or 'debit'
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    description: { type: String },
});
module.exports = mongoose.model('Transaction', TransactionSchema);
