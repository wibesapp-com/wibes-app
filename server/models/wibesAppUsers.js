const mongoose = require('mongoose'); //to create schema and model
const Schema = mongoose.Schema;

const wibesAppUsersSchema = new Schema({
  //define different datatypes and propertis of tables
  human_name:String,
  pass_code:String,
  backup_code:String,
  personal_key:String,
  reverb_coins:String,
  reputation:String,
  portal_name:String,
  wibe_wallet:String,
  block:String
});

module.exports = mongoose.model('wibesAppUsers',wibesAppUsersSchema); //collection name in mongoDB
//we make model named book in which tuples will look like bookSchema
