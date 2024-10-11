import express from 'express';
import { saveGame } from '../controllers/gameController.js';
import { getAllGames, getGameById } from '../controllers/getGamesController.js';
import { testingController } from '../controllers/testingController.js';

const router = express.Router();

router.post('/api/savegame', saveGame);
router.get('/api/getallgames', getAllGames);
router.get('/api/getallgames/:id', getGameById);
router.get('/api/testing', testingController);

export default router;