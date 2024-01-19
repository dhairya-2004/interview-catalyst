const express = require('express');
const insertQuestion = require('../controllers/Question-Controllers/Question.controller');
const findQuestion = require('../controllers/Question-Controllers/FindQuestion.controller');
const searchQuestion = require('../controllers/Question-Controllers/SearchQuestion.controller');
const { verify } = require('jsonwebtoken');

const router = express.Router();

router
    .route('/question')
    .post(insertQuestion)

router
    .route('/question')
    .get(findQuestion);

router
    .route('/search/:key')
    .get(searchQuestion);

// function verifyT(req, resp, next) {
//     const bearerHeader = req.headers['authorization']
//     if (typeof bearerHeader !== 'undefined') {
//         const bearer = bearerHeader.split(" ");
//         const token = bearer[1];
//         console.log('Received Token:', token);
//         req.token = token;
//         next();
//     }
//     else {
//         resp.send({
//             result: "token is not valid"
//         })
//     }
// }



module.exports = router;



