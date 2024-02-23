const express = require("express");
const EditAnswer = require("../../models/editAnswer.model");

async function getName(req, res) {
  try {
    // console.log(req.params.key);

    const get_name = await EditAnswer.find({
      $or: [{ outputData: { $regex: req.params.key, $options: "i" } }],
    });

    if (get_name && get_name.length > 0) {
      console.log(get_name[0].cusername);
      res.json({ name: get_name[0].cusername });
    } else {
      res.status(404).json({ message: "No matching documents found." });
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = getName;
