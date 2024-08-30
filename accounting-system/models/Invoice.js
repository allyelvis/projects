const mongoose = require('mongoose');
const InvoiceSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    items: [
        {
            description: { type: String, required: true },
            quantity: { type: Number, required: true },
            price: { type: Number, required: true },
        },
    ],
    total: { type: Number, required: true },
    date: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Invoice', InvoiceSchema);
