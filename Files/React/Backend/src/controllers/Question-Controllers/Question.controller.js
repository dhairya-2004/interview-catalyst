const express = require('express');
const Question = require('../../models/question.model');

async function insertQuestion(req,res){
    try {
        const { question, answer } = req.body;
        console.log(req.body);
        const question_main = new Question({ question, answer });

        await question_main.save();



        res.status(201).json({ message: 'Registration successful' });
    }
    catch (e) {
        res.status(500).json({ message: 'Internal Server Error' });
        console.error('Registration Error:', e);
    }
}

module.exports = insertQuestion;