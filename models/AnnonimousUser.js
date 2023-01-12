const mongoose = require('mongoose'); 

const AnnonimousUserSchema = mongoose.Schema({
    email : {
        type: String,
        required :  true
    },
    test : {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    type: {
        type : String,
        required : true,
        default: 'annonimousUser'
    },
    contacted: {
        type: Boolean,
        default: false
    },
});

const AnnonimousUser = mongoose.model('AnnonimousUser', AnnonimousUserSchema);

module.exports = AnnonimousUser