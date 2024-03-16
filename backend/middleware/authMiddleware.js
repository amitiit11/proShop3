import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from "../model/userModel.js";

// Protect Routes
const protect = asyncHandler(async (req, res, next) => {
  let token;
  // read jwt from cookie
  token = req.cookies.jwt;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findOne({_id: decoded.userId});
      next();
    } catch (error) {
      console.log(error);
      res.send(401);
      throw new Error("not autherised, token failed");
    }
  } else {
    res.send(401);
    throw new Error("not autherised, no token");
  }
});

// admin middleware
const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.send(401);
    throw new Error("not autherised as admin");
  }
};

export { protect, admin };
