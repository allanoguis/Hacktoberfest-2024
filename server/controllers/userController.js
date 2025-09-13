import db from "../firebaseConfig.js";

export const userController = async (req, res) => {
  const { userId, email, fullname, profileImageUrl, createdAt, lastSignInAt } =
    req.body;

  try {
    const usersRef = db.collection("users");
    const querySnapshot = await usersRef.where("email", "==", email).get();

    if (!querySnapshot.empty) {
      // If the email exists
      return res
        .status(204)
        .json({ message: "User with email " + email + " already exists" });
    }

    // If the email does not exist, create a new user
    const newUser = await usersRef.add({
      userId,
      email,
      fullname,
      profileImageUrl,
      createdAt,
      lastSignInAt,
    });

    res.status(201).json({ message: "User " + fullname + " created" });
  } catch (error) {
    res.status(500).json({ message: "Error saving user" });
  }
};
