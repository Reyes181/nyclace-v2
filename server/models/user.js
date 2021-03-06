const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const moment = require('moment');
const SALT_I = 10;
const validator = require('validator');
require('dotenv').config();

const userSchema = mongoose.Schema({
    email:{
        type:String,
        required: true,
        trim: true,
        unique: true
        // validate(value){
        //     if(!validator.isEmail(value)){
        //         throw new Error('Invalid Email')
        //     }
        // }
    },
    password:{
        type:String,
        required: true,
        minlength: 5,
        trim: true
    },
    name:{
        type:String,
        required: true,
        maxlength: 50
    },
    lastname:{
        type:String,
        required: true,
        maxlength: 50
    },
    phone: {
        type: String,
        maxlength: 10,
        default: '000-000-0000'
    },
    
    street: {type: String},
    city: {type: String},
    state: {
        type: String
    },
    zipcode: {type: Number},
    
    cart:{
        type:Array,
        default: []
    },
    history:{
        type:Array,
        default: []
    },
    role:{
        type:String,
        enum: ['user', 'admin'],
        default:'user'
    },
    verified: {
        type: Boolean, 
        default: false
    },
    token:{
        type:String
    },
    resetToken:{
        type:String
    },
    resetTokenExp:{
        type:Number
    }
    
});

userSchema.pre('save',function(next){
    var user = this;
    
    if(user.isModified('password')){
        bcrypt.genSalt(SALT_I,function(err,salt){
            if(err) return next(err);
            
            bcrypt.hash(user.password,salt,function(err,hash){
                if(err) return next(err);
                user.password = hash;
                next();
            });
        });
    } else{
        next();
    }
});


userSchema.methods.comparePassword = function(candidatePassword, callback){
    bcrypt.compare(candidatePassword, this.password, function(err,isMatch){
        if(err) return callback(err);
        callback(null, isMatch);
    })
}

userSchema.methods.generateResetToken = function(callback){
    var user = this;
    
    crypto.randomBytes(20,function(err,buffer){
        if(err) return err;
        var token = buffer.toString('hex');
        var today = moment().startOf('day').valueOf();
        var tomorrow = moment(today).endOf('day').valueOf();
        
        user.resetToken = token;
        user.resetTokenExp = tomorrow;
        
        user.save(function(err,user){
            if(err) return callback(err);
            callback(null,user);
        })
    })
}

userSchema.methods.generateToken = function(callback){
    var user = this;
    var token = jwt.sign(user._id.toHexString(),process.env.SECRET)
    
    user.token = token;
    user.save(function(err,user){
        if(err) return callback(err);
        callback(null,user);
    });
};

userSchema.statics.findByToken = function(token, callback){
    var user = this;
    
    jwt.verify(token,process.env.SECRET,function(err,decode){
        user.findOne({"_id":decode,"token":token},function(err,user){
            if(err) return callback(err);
            callback(null,user);
        })
    })
}


const User = mongoose.model('User',userSchema);

module.exports =  User 