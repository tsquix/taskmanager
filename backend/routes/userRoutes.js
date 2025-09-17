const express = require("express");
const { adminOnly, protect } = require("../middlewares/authMiddleware");
const {
  getUsers,
  getUserById,
  deleteUser,
} = require("../controllers/userController");
const router = express.Router();

//user managment routes
router.get("/", protect, adminOnly, getUsers); //get all users admin only
router.get("/:id", protect, getUserById); // get a specific user
// router.delete("/:id", protect, adminOnly, deleteUser); // delete user admin only

module.exports = router;
