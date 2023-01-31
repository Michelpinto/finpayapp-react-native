import express from 'express';
import { registerUser, loginUser } from '../controllers/userController';

const router = express.Router();

router.post('/', registerUser);
router.post('/login', loginUser);

module.exports = router;
