// import Game from '../models/Game.js';
// import User from '../models/User.js';

export const saveGame = async (req, res) => {
  //const { time, score } = req.body;

  try {
    //const user = await User.findOne({ email });
    // if (!user) {
    //   return res.status(404).json({ message: 'User not found' });
    // }

    // const game = new Game({
    //   userId: user._id,
    //   score
    // });

    //await game.save();
    //console.log("time",time,"score",score);
    console.log(req.body);

    res.status(201).json({ message: 'Game saved successfully'});
  } catch (error) {
    console.error('Error in saveGame:', error);
    res.status(500).json({ message: 'Error saving game' });
  }
};
