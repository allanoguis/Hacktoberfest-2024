

export const userController = (req, res) => {
  try {
    console.log("testing");
    console.log(req.body);
    console.log("data", req.body);
    res.status(201).json({ message: 99 });
  } catch (error) {
    console.error("Error in user controllder (server SIDE):", error);
    res.status(500).json({ message: "Error saving user" });
  }
};
