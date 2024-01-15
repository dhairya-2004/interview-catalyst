const mongoose = require('mongoose');

// Questions
const QuestionsSchema = new mongoose.Schema({
    question: {
        type: String,
        require: true,
        uniqe: true
    },
    answer: {
        type: String,
        require: true
    }
})
const Questions = mongoose.model('Questions', QuestionsSchema);


module.exports = Questions;