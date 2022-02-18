const express = require("express");
const authenticateUser = require("../middleware/authentication");
const router = express.Router();
const {
  getFavorite,
  postFavorite,
  deleteFavorite,
} = require("../controllers/favorites");

router.get("/", authenticateUser, getFavorite);
router.post("/", authenticateUser, postFavorite);
router.delete("/:jobId", authenticateUser, deleteFavorite);

module.exports = router;
