const User = require("../models/index.js");

const createUser = async (req, res) => {
  try {
    const newUser = await new User({
      _id: req.body._id,
      name: req.body.name,
      userName: req.body.userName,
    });
    await newUser.save();
    res.send(newUser);
  } catch (e) {
    res.json("failed to create User");
  }
};

const editUser = async (req, res) => {
  try {

    console.log(req.body);
    const user = await User.find({_id : req.body._id})
    const findUser = await User.findOneAndUpdate(
      user,
      { $set: {...req.body } },
      { new: true, useFindAndModify: false }
    );
    console.log(findUser);
    res.json(findUser);
  } catch (e) {
    res.json(e.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
   const user =  await User.deleteOne({ _id: userId });
    res.json(user);
  } catch (e) {
    res.json(e.message);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    const usersArary = [];
    users.forEach((user) => usersArary.push(user));
    res.json(usersArary);
  } catch (e) {
    res.json(e.message);
  }
};

const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findOne({ _id: userId });
    console.log(user);
    res.json(user);
  } catch (e) {
    res.json(e.message);
  }
};

const deleteAllUsers = async (req, res) => {
  try {
    await User.deleteMany({});
    res.send("delete succusfully");
  } catch (e) {
    res.send("unsuccessfull !");
  }
};

module.exports = {
  createUser,
  editUser,
  deleteUser,
  getUserById,
  getAllUsers,
  deleteAllUsers,
};
