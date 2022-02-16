const express = require("express");
const router = express.Router();
const authenticateUser = require("../middleware/authentication");

const {
  getAllJobs,
  getJob,
  createJobs,
  updateJobs,
  deleteJobs,
  getAllJobsByAllUsers,
} = require("../controllers/jobs");

router
  .route("/")
  .post(authenticateUser, createJobs)
  .get(authenticateUser, getAllJobs);
// router.route("/all-jobs/:id").get(getAllJobsByAllUsers);
router.route("/all-jobs").get(getAllJobsByAllUsers);
router
  .route("/:id")
  .get(authenticateUser, getJob)
  .delete(authenticateUser, deleteJobs)
  .patch(authenticateUser, updateJobs);

module.exports = router;
