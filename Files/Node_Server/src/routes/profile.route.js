const express = require("express");
const setProfile = require("../controllers/Profile-controller/Profile.controller");
const getProfile = require("../controllers/Profile-controller/GetProfile.controller");

const router = express.Router();

router.post("/profile", setProfile)
router.post("/getprofile", getProfile);

module.exports = router;
