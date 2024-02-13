const express = require("express");
const EditAnswers = require("../../models/editAnswer.model");
const Comments = require("../../models/comment.model");

async function updateGrant(req, res) {
  try {
    const { id, grant, edited_answer,comment_id } = req.body;
    console.log(req.body);
    // const currentTimeInIndia = new Date().toLocaleString("en-US", {
    //   timeZone: "Asia/Kolkata",
    // });

    if (grant === "false") {
      await EditAnswers.deleteOne(id);
      res.status(201).json({ message: "Request Cancel Successful" });
    } else {
      const previousans =EditAnswers.findOne({comment_id:comment_id});
      if(previousans===1){
        await EditAnswers.deleteOne(comment_id);
      }
      await EditAnswers.updateMany(id, {
        $set: { grant: grant },
      });

      await Comments.updateOne(comment_id, {
        $set: { edited_comment: edited_answer },
      });
    }
  } catch (e) {
    res.status(500).json({ message: "Internal Server Error" });
    console.error("Question add Error:", e);
  }
}

module.exports = updateGrant;
