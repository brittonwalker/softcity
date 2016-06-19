var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ProjectSchema   = new Schema({
    title: String,
    about: String,
    author: String,
    specs: String,
    price: Number,
    link: String,
    img: []
});

module.exports = mongoose.model('Project', ProjectSchema);
