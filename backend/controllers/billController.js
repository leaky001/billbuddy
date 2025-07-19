const Bill = require('../models/Bill');

const getBills = async (req, res) => {
  const bills = await Bill.find({ user: req.user._id }).sort({ dueDate: 1 });
  res.json(bills);
};

const createBill = async (req, res) => {
  const bill = await Bill.create({ ...req.body, user: req.user._id });
  res.status(201).json(bill);
};

const updateBill = async (req, res) => {
  const bill = await Bill.findOne({ _id: req.params.id, user: req.user._id });
  if (!bill) return res.status(404).json({ message: 'Bill not found' });

  Object.assign(bill, req.body);
  await bill.save();
  res.json(bill);
};

const deleteBill = async (req, res) => {
  const bill = await Bill.findOne({ _id: req.params.id, user: req.user._id });
  if (!bill) return res.status(404).json({ message: 'Bill not found' });

  await bill.deleteOne();
  res.json({ message: 'Bill deleted' });
};

module.exports = { getBills, createBill, updateBill, deleteBill };
