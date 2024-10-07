import express from 'express';
import { saveGame } from '../controllers/gameController.js';

const router = express.Router();


router.get('/api/savegame', leaderBoardController);

export default router;