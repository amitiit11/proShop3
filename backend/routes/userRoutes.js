import express from "express";
const router = express.Router();

import {
  authUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  registerUsers,
  getUserByID,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";

router.route("/").get(getUsers).post(registerUsers);
router.post("/logout",logoutUser);
router.post("/login",authUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile);
router.route("/:id").delete(deleteUser).get(getUserByID).put(updateUser);

export default router;
