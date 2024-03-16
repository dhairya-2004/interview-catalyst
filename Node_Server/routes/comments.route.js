const express = require("express");
const commentsubmit = require("../controllers/Comments-Controllers/CommentSubmit.controllers");
const getcomment = require("../controllers/Comments-Controllers/Getcomment.controller");
const GetCommentById = require("../controllers/Comments-Controllers/GetCommentById.controller");
const updateGrant = require("../controllers/Comments-Controllers/UpdateGrant.controller");

const router = express.Router();

router
  .post("/commentsubmit", commentsubmit)
  .get("/getcomment", getcomment)
  .get("/getcommentbyid", GetCommentById)
  .post("/updategrantmain",updateGrant)

module.exports = router;
