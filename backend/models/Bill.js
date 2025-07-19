const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  dueDate: { type: Date, required: true },
  category: { type: String, default: 'Other' },
  status: { type: String, enum: ['Paid', 'Unpaid'], default: 'Unpaid' },
  location: {
    name: String,
    lat: Number,
    lng: Number,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Bill', billSchema);
