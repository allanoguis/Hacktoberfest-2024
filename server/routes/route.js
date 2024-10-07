import express from 'express';
import { saveGame } from '../controllers/gameController.js';
import { getAllGames, getGameById } from '../controllers/getGamesController.js';

const router = express.Router();

router.post('/api/savegame', saveGame);
router.get('/api/getallgames', getAllGames);
router.get('/api/getallgames/:id', getGameById);

export default router;