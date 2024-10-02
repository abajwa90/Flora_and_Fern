import express from 'express';
import { guestCheckout } from '../controllers/checkoutController.js';

const router = express.Router();

router.post('/checkout/guest', guestCheckout);

export default router;
