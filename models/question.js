const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const answerSchema = new Schema({
    content: String,
    code: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},{
    timestamps: true
})

const questionSchema = new Schema ({
    title: String,
    question: String,
    difficult: String,
    code: String,
    likes: Number,
    answer: [answerSchema],
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }

}, {
    timestamps: true
})

module.exports = mongoose.model("Question", questionSchema);