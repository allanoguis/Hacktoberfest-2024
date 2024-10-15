import express from 'express';
import { saveGame } from '../controllers/gameController.js';
import { getAllGames, getGameById } from '../controllers/getGamesController.js';
import { userController } from '../controllers/userController.js';
import {getHighscoreForPlayer} from '../controllers/highScoreController.js';
import {getLeaderBoard} from '../controllers/leaderboardController.js'
import { getpastTenGames } from '../controllers/getPastTenGames.js'
const router = express.Router();

router.post('/api/savegame', saveGame);
router.get('/api/getallgames', getAllGames);
router.get('/api/getallgames/:id', getGameById);
router.post('/api/users', userController);
router.get('/api/highscore', getHighscoreForPlayer);
router.get('/api/leaderboard', getLeaderBoard);
router.get('/api/getpastten', getpastTenGames);

export default router;