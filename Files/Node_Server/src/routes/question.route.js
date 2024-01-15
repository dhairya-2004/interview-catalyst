const express=require('express');
const insertQuestion=require('../controllers/Question-Controllers/Question.controller');

const router = express.Router();

router
    .route('/question')
    .post(insertQuestion);

module.exports = router;



