const mongoose = require("mongoose");
const FavoritesSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "please provide user"],
  },
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
    required: [true, "please provide user"],
  },
});

module.exports = mongoose.model("Favorites", FavoritesSchema);