import db from "../../client/lib/firebaseConfig.js";

export const getpastTenGames = async (req, res) => {
  try {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const gamesRef = db.collection("games");
    const pastTenGamesQuery = await gamesRef
      .where("player", "==", userId)
      .orderBy("time", "desc")
      .limit(10)
      .get();

    const pastTenGames = [];
    pastTenGamesQuery.forEach((doc) => {
      pastTenGames.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    res.status(200).json({ pastTenGames });
  } catch (error) {
    console.error("Error in getpastTenGames:", error);
    res.status(500).json({ message: "Error getting past ten games" });
  }
};
