const express = require("express");
const Profile = require("../../models/profile.model");
const User = require("../../models/login.model");

async function setProfile(req, res) {
  const { cusername, name, collegename, bio } = req.body;

  console.log("SetProfile");

  try {
    const profile_check = await Profile.findOne({ username: cusername });
    console.log(profile_check);
    if (profile_check != null) {
      const profile1 = await Profile.findOne({ username: cusername });
      if (name !== "") {
        profile1.name = name;
      }
      profile1.college_name = collegename;
      profile1.bio = bio;
      await profile1.save();
      res.status(201).json({ message: "Profile Update Successful" });
    } else {
      const profile = new Profile({
        username: cusername,
        name: name,
        college_name: collegename,
        bio: bio,
      });
      await profile.save();
      res.status(201).json({ message: "Profile Add Successful" });
    }
  } catch (e) {
    res.status(500).json({ message: "Internal Server Error" });
    console.error("Profile Add Error:", e);
  }
}

module.exports = setProfile;
