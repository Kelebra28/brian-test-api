const mongoose = require('mongoose'); 

const AnnonimousUserSchema = mongoose.Schema({
    email : {
        type: String,
        required :  true
    },
    test : [{
        nameTest: {
            type: String,
            required: true
        },
        puntuation: {
            type:  Number,
            required: true
        }
    }]
});

const AnnonimousUser = mongoose.model('AnnonimousUser', AnnonimousUserSchema);

module.exports = AnnonimousUser