const express = require("express");
const { getAllDestinations, getDestinationById, addDestination } = require("../controllers/destinationControllers");
const router = express.Router();

router.get("/", getAllDestinations);
router.get("/:id", getDestinationById);
router.post("/", addDestination);

module.exports = router;
