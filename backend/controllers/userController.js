import User from "../model/userModel.js";
import asyncHandler from "../middleware/asyncHandler.js";

// @desc auth user and get token
// @route POST /api/users/login
// @access Public
const authUser = asyncHandler(async(req,res)=>{
   res.send("auth user");
})

// @desc logout/ clear the jwt token
// @route POST /api/users/logout
// @access Private
const logoutUser = asyncHandler(async(req,res)=>{
    res.send("logout user");
 })

 // @desc get user profile
// @route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async(req,res)=>{
    res.send("get user profile");
 })

// @desc update user profile
// @route PUT /api/users/profile
// @access PRIVATE
const updateUserProfile = asyncHandler(async(req,res)=>{
    res.send("updated user profile");
 })

// @desc get Users
// @route GET /api/users
// @access PRIVATE/ADMIN
const getUsers = asyncHandler(async(req,res)=>{
    res.send("get Users");
 })

// @desc register Users
// @route post /api/users
// @access PRIVATE/ADMIN
const registerUsers = asyncHandler(async(req,res)=>{
    res.send("register Users");
 })

 // @desc get User by ID
// @route GET /api/users/:id
// @access PRIVATE/ADMIN
const getUserByID = asyncHandler(async(req,res)=>{
    res.send("get User by ID");
 })

 // @desc delete Users
// @route DELETE /api/users/:id
// @access PRIVATE/ADMIN
const deleteUser = asyncHandler(async(req,res)=>{
    res.send("delete Users");
 })

// @desc update user by ID
// @route PUT /api/users/:id
// @access PRIVATE/ADMIN
const updateUser = asyncHandler(async(req,res)=>{
    res.send("UPDATE User by ID");
 })

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
 }