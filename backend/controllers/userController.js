import User from "../model/userModel.js";
import asyncHandler from "../middleware/asyncHandler.js";
import generateToken from "../utility/generateToken.js";

// @desc auth user and get token
// @route POST /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
  // console.log(req.body);
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }

  
});

// @desc logout/ clear the jwt token
// @route POST /api/users/logout
// @access Private
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", { httpOnly: true, expiresIn: new Date(0) });
  res.status(200).json({ message: "logout successfully" });
});

// @desc get user profile
// @route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc update user profile
// @route PUT /api/users/profile
// @access PRIVATE
const updateUserProfile = asyncHandler(async (req, res) => {
  console.log('###',req.user);
  const user = await User.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updateUser = await user.save();
    res.status(200).json({
      _id: updateUser._id,
      name: updateUser.name,
      email: updateUser.email,
      isAdmin: updateUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc get Users
// @route GET /api/users
// @access PRIVATE/ADMIN
const getUsers = asyncHandler(async (req, res) => {
  res.send("get Users");
});

// @desc register Users
// @route post /api/users
// @access PRIVATE/ADMIN
const registerUsers = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.find({ email });
  console.log(userExists);
  console.log(name, email, password);
  if (userExists.length !== 0) {
    res.status(400);
    throw new Error("User already exists");
  }
  const user = await User.create({ name, email, password });
  generateToken(res, user._id);
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User data");
  }
});

// @desc get User by ID
// @route GET /api/users/:id
// @access PRIVATE/ADMIN
const getUserByID = asyncHandler(async (req, res) => {
  res.send("get User by ID");
});

// @desc delete Users
// @route DELETE /api/users/:id
// @access PRIVATE/ADMIN
const deleteUser = asyncHandler(async (req, res) => {
  res.send("delete Users");
});

// @desc update user by ID
// @route PUT /api/users/:id
// @access PRIVATE/ADMIN
const updateUser = asyncHandler(async (req, res) => {
  res.send("UPDATE User by ID");
});

export {
  authUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  registerUsers,
  getUserByID,
  deleteUser,
  updateUser,
};
