import express from 'express';
import { saveGame } from '../controllers/gameController.js';

const router = express.Router();


router.post('/api/savegame', saveGame);

export default router;