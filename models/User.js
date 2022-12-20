const mongoose = require('mongoose'); 

const UserSchema = mongoose.Schema({
    first_name : {
        type: String,
        required :  true
    },
    last_name : {
        type: String,
        required :  true
    },
    email: {
        type: String,
        required :  true,
        unique: true,
        validate: value => {
            if (!validator.isEmail(value)) {
                throw new Error({error: 'Invalid Email address'})
            }
        }
    },
    password: {
        type: String,
        required :  false,
        minLength: 7
    },
    date: {
        type: Date,
        default: Date.now
    },
    testResults:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Test'
    }],
    type: {
        type : String,
        required : true
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User