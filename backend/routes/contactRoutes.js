const express = require("express");
const { sendMessage, getMessages } = require("../controllers/ContactControllers");

const router = express.Router();

router.post("/", sendMessage);
router.get("/", getMessages);

module.exports = router;

