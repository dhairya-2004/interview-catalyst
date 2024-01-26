const express = require("express");
const multer = require('multer');
const setProfile = require("../controllers/Profile-controller/Profile.controller");
const getProfile = require("../controllers/Profile-controller/GetProfile.controller");

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/profile", setProfile)
router.post("/getprofile",upload.single('image'), getProfile);

module.exports = router;
