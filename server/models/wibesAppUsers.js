const mongoose = require('mongoose'); //to create schema and model
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

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


wibesAppUsersSchema.pre('save', function(next) {
    if(!this.isModified('pass_code')) {
        return next();
    }
    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err);

        bcrypt.hash(this.pass_code, salt, (err, hash) => {
            if(err) return next(err);
            this.pass_code = hash;

            next()
        })
    })
})

module.exports = mongoose.model('wibesAppUsers',wibesAppUsersSchema); //collection name in mongoDB
//we make model named book in which tuples will look like bookSchema
