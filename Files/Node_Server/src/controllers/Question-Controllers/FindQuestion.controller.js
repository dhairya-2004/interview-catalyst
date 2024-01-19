const express = require('express');
const Question = require('../../models/question.model');


async function findQuestion(req, res) {

    try {
        const question = await Question.find({});
        // console.log(question);
        res.json(question )
    }

    catch (error) {
        res.json({ message: "Error" })
    }
}


// async function findQuestion(verifyT, req, res) {

//     jwt.verify(req.token, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', async (err, authdata) => {

//         if (err) {
//             res.status(401).send({ result: "invalid token" });
//         }

//         else {
//             try {
//                 const question = await Question.find({});
//                 // console.log(question);
//                 res.json(question)
//             }

//             catch (error) {
//                 res.json({ message: "Error" })
//             }
//         }
//     })
// }


module.exports = findQuestion;