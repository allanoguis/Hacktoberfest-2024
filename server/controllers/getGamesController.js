import db from "../../client/lib/firebaseConfig.js";

export const getAllGames = async (req, res) => {
  try {
    const gamesSnapshot = await db.collection("games").get();
    const games = [];

    gamesSnapshot.forEach((doc) => {
      games.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    res.status(200).json({ games });
  } catch (error) {
    console.error("Error in getAllGames:", error);
    res.status(500).json({ message: "Error retrieving games" });
  }
};

export const getGameById = async (req, res) => {
  const { id } = req.params;

  try {
    const gameDoc = await db.collection("games").doc(id).get();

    if (!gameDoc.exists) {
      return res.status(404).json({ message: "Game not found" });
    }

    const game = {
      id: gameDoc.id,
      ...gameDoc.data(),
    };

    res.status(200).json({ game });
  } catch (error) {
    console.error("Error in getGameById:", error);
    res.status(500).json({ message: "Error retrieving game" });
  }
};
