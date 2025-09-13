import db from "../firebaseConfig.js";

export const saveGame = async (req, res) => {
  const { player, playerName, time, score, ipAddress, deviceType, userAgent } =
    req.body;

  try {
    // Save the game data to Firestore
    const docRef = await db.collection("games").add({
      player,
      playerName,
      time,
      score,
      ipAddress,
      deviceType,
      userAgent,
      createdAt: new Date(), // Adding a timestamp
    });

    res.status(201).json({ message: "Game saved successfully", id: docRef.id });
  } catch (error) {
    res.status(500).json({ message: "Error saving game" });
  }
};
