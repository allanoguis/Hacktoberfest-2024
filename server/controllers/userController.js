import db from "../../client/lib/firebaseConfig.js";

export const userController = async (req, res) => {
  const { userId, email, fullname, profileImageUrl, createdAt, lastSignInAt } =
    req.body;

  try {
    const usersRef = db.collection("users");
    const querySnapshot = await usersRef.where("email", "==", email).get();

    if (!querySnapshot.empty) {
      // If the email exists
      console.log("User with email " + email + " already exists");
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
      createdAt: new Date(),
    });

    console.log("User created with ID: ", newUser.id);
    console.log(req.body);

    res.status(201).json({ message: "User " + fullname + " created" });
  } catch (error) {
    console.error("Error in userController (server SIDE):", error);
    res.status(500).json({ message: "Error saving user" });
  }
};
