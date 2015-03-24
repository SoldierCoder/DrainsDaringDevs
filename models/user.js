 var 
   mongoose = require("mongoose"),
   Schema   = mongoose.Schema,
   userSchema = new Schema({
      firstName: String,
      lastName: String,
      gravatarEmail: String,
      email: String,
      password: String,
      created: {type: Date, default: Date.now}
   }),
   User = mongoose.model('User', userSchema);
   
   module.exports = {
      User: User
   };
   