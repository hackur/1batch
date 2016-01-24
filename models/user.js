/* @flow */

var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  name: String,
  localpass: String,
  id: String,
  posted: Date,
  test: Boolean
});

module.exports = mongoose.model('OBUser', userSchema);
