
const mongoose = require('mongoose');

const aggregatorSchema = new mongoose.Schema({
    author: String,
    title: String,
    description: String,
    publishedAt: Date,
    url:String,
    urlToImage:String,
    content: String
});

module.exports = mongoose.model('Aggregator', aggregatorSchema);