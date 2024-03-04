const express = require("express");
const EditAnswers = require("../../models/editAnswer.model");
const Comments = require("../../models/comment.model");

async function updateGrant(req, res) {
  try {
    const { _id, grant, edited_answer, comment_id,outputData } = req.body;
    // console.log(req.body);

    if (grant === "false") {
      await EditAnswers.deleteOne({ _id: _id });
      res.status(201).json({ message: "Request Cancel Successful" });
    } else {
      const previousans = await Comments.findOne({
        _id: comment_id,
      });

      // if (previousans.edited_comment === "none") {
      await Comments.updateOne(
        { _id: comment_id },
        {
          $set: { edited_comment: edited_answer },
        }
      );

      // await EditAnswers.deleteMany({ comment_id: comment_id, grant: "true" });
      await EditAnswers.updateMany(
        { comment_id: comment_id },
        {
          $set: { grant: "setTrue" },
        }
      );
     
      if (_id) {
        await EditAnswers.updateOne(
          { _id },
          {
            $set: { grant: grant ,outputData:outputData},
          }
        );
      }
    }
  } catch (e) {
    res.status(500).json({ message: "Internal Server Error" });
    console.error("Editanswer Grant Error:", e);
  }
}

module.exports = updateGrant;
