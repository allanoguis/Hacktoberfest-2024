import db from '../firebaseConfig.js';

export const getLeaderBoard = async (req, res) => {
  try {
    const gamesRef = db.collection('games');
    const usersRef = db.collection('users');

    // Get the top scores for each player
    const topScoresQuery = await gamesRef
      .orderBy('score', 'desc')
      .get();

    // Process the query results
    const playerScores = new Map();
    topScoresQuery.forEach((doc) => {
      const game = doc.data();
      if (!playerScores.has(game.player) || game.score > playerScores.get(game.player).score) {
        playerScores.set(game.player, {
          playerId: game.player,
          playerName: game.playerName,
          score: game.score,
          time: game.time
        });
      }
    });

    // Sort players by score and get top 10
    const topPlayers = Array.from(playerScores.values())
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);

    // Fetch additional user information
    const leaderboard = await Promise.all(topPlayers.map(async (player) => {
      if (!player.playerId) {
        console.warn(`Invalid playerId for player: ${JSON.stringify(player)}`);
        return player; // Return player data without additional info
      }

      try {
        const userDoc = await usersRef.doc(player.playerId).get();
        const userData = userDoc.exists ? userDoc.data() : null;
        return {
          ...player,
          profileImageUrl: userData ? userData.profileImageUrl : null,
          email: userData ? userData.email : null
        };
      } catch (error) {
        console.error(`Error fetching user data for player ${player.playerId}:`, error);
        return player; // Return player data without additional info
      }
    }));

    res.status(200).json({ leaderboard });
  } catch (error) {
    console.error('Error in getLeaderBoard:', error);
    res.status(500).json({ message: 'Error in getLeaderBoard controller' });
  }
};