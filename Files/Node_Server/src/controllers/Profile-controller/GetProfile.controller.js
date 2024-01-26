const express = require("express");
const Profile = require("../../models/profile.model");

async function getProfile(req, res) {
  const { cusername } = req.body;
  // console.log("GetProfile");
  // console.log(req.body);

  try {
    const profile = await Profile.findOne({ username: cusername });

    // console.log(profile);
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.status(201).json({ message: "Profile Get Successful", profile });
  } catch (e) {
    res.status(500).json({ message: "Internal Server Error" });
    console.error("Profile Get Error:", e);
  }

  // console.log("GetProfile done");
}

module.exports = getProfile;
