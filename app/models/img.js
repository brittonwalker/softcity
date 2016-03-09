var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var imgSchema    = new Schema({ url: String })

module.exports = mongoose.model('Img', imgSchema);
