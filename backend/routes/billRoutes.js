const express = require('express');
const {
  getBills,
  createBill,
  updateBill,
  deleteBill,
} = require('../controllers/billController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(protect);

router.route('/')
  .get(getBills)
  .post(createBill);

router.route('/:id')
  .put(updateBill)
  .delete(deleteBill);

module.exports = router;
