const mongoose = require('mongoose');
const _ =require('lodash');
const bcrypt = require ('bcrypt');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 2,
        maxlength: 50,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        maxlength: 100,
        trim: true 
    },
    password: {
        type:String,
        required: true,
    }

    //definir esquema del objeto de usuario
},{
    strict:true
});

UserSchema.methods.toJSON = function (){
    const user = this;

    return _.pick(user, ['_id', 'username', 'email']);
}

UserSchema.pre('save', function(next){
    const user= this;

    if(user.isModified('password')){
            bcrypt.hash(user.password, 10).then(hash => {
                user.password = hash;
                    next();
            });

    } else{
        next();
    }
   
});

const User = mongoose.model('user', UserSchema);

module.exports = User; 