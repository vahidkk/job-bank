const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");
const Favorites = require("../models/Favorites");

const getFavorite = async (req, res) => {
  // const { currentUserID } = req.params
  // const { jobID } = req.body
  const {
    // body: { company, position },
    user: { userId: currentUserId },
    // params: { jobId },
  } = req;
  if (!currentUserId) {
    throw new BadRequestError("Please provide a user ID and job ID");
  }
  const allfavorites = await Favorites.find({ userId: currentUserId });
  res.status(StatusCodes.OK).json({ favorites: allfavorites });
};

const postFavorite = async (req, res) => {
  const {
    body: { jobId: currentJobId },
    user: { userId: currentUserId },
    // params: { jobId: currentJobId },
  } = req;
  console.log(currentUserId, currentJobId);
  //   if (!currentUserId || !currentJobId) {
  //     throw new BadRequestError("Please provide a user ID and job ID");
  //   }
  const created = await Favorites.create({
    userId: currentUserId,
    jobId: currentJobId,
  });

  res.status(StatusCodes.CREATED).json({ created });
};

const deleteFavorite = async (req, res) => {
  const {
    // body: { jobId: currentJobId },
    user: { userId: currentUserId },
    params: { jobId: currentJobId },
  } = req;
  if (!currentUserId || !currentJobId) {
    throw new BadRequestError("Please provide a user ID and job ID");
  }
  const deleted = await Favorites.findOneAndDelete({
    userId: currentUserId,
    jobId: currentJobId,
  });
  res.status(StatusCodes.OK).json({ deleted });
};

module.exports = { getFavorite, postFavorite, deleteFavorite };
