const mongoose = require("mongoose");
const JobsSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, " please provide company name"],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, " please provide position"],
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ["under45k", "between45k-70k", "morethan70k"],
      default: "under45k",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "please provide user"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobsSchema);
