import express from 'express';
import {
  getUserBalance,
  createBalance,
  sendMoney,
} from '../controllers/balanceController';

const router = express.Router();

router.get('/user/:id', getUserBalance);
router.post('/', createBalance);
router.post('/send', sendMoney);

module.exports = router;
