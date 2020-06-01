const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const answerSchema = new Schema({
    content: String
},{
    timestamps: true
})

const questionSchema = new Schema ({
    title: String,
    question: String,
    difficult: String,
    code: String,
    answer: [answerSchema]

}, {
    timestamps: true
})

module.exports = mongoose.model("Question", questionSchema);