import db from '../firebaseConfig.js';

export const getHighscoreForPlayer = async (req, res) => {
  const { playerId } = req.query; 

  if (!playerId) {
    return res.status(400).json({ message: 'Player ID is required' });
  }
  console.log("playerId: " + playerId);

  try {
    const gamesRef = db.collection('games');

    const playerGamesQuery = await gamesRef
      .where('player', '==', playerId)
      .orderBy('score', 'desc')
      .limit(1)
      .get();

    if (playerGamesQuery.empty) {
      return res.status(404).json({ message: 'No games found for the specified player' });
    }

    let topGame;
    playerGamesQuery.forEach((doc) => {
      topGame = {
        id: doc.id,
        ...doc.data(),
      };
    });

    res.status(200).json({ topGame });
    console.log(topGame.score);
  } catch (error) {
    console.error('Error retrieving high score for player:', error);
    res.status(500).json({ message: 'Error retrieving high score for player' });
  }
};