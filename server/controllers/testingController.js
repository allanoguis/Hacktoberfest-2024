
export const testingController = (req,res) => {
  console.log('testing');
  console.log(req.body);
  res.status(201).json({ message: 99 });
}
