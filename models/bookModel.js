/**
 * Created by David on 2/23/2017.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookModel = new Schema({
    title: {type: 'string'},
    author: {type: 'string'},
    genera: {type: 'string'},
    read: {type: Boolean, default: false}
})

module.exports = mongoose.model('Book', bookModel)