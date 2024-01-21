const express = require('express');
const Question = require('../../models/question.model');

async function insertQuestion(req, res) {


    try {
        const { questions, username } = req.body;
        console.log(req.body)

        if (username != '') {


            const question_main = new Question({
                username: username,
                question: questions.question,
                answer: questions.answer,
                timestamp: Date.now()
            });

            await question_main.save();
        }


        res.status(201).json({ message: 'Question add successful' });
    }
    catch (e) {
        res.status(500).json({ message: 'Internal Server Error' });
        console.error('Question add Error:', e);
    }


}

module.exports = insertQuestion;