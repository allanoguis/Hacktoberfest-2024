import db from "../../client/lib/firebaseConfig.js";

export const saveGame = async (req, res) => {
  const { player, playerName, time, score, ipAddress, deviceType, userAgent } =
    req.body;
  console.log(time);

  try {
    console.log(req.body);

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

    console.log("Game saved with ID: ", docRef.id);

    res.status(201).json({ message: "Game saved successfully", id: docRef.id });
  } catch (error) {
    console.error("Error in saveGame (server SIDE):", error);
    res.status(500).json({ message: "Error saving game" });
  }
};
