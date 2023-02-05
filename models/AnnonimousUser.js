const mongoose = require('mongoose'); 

const AnnonimousUserSchema = mongoose.Schema({
    email : {
        type: String,
        required :  true
    },
    tests : [{
            name: {
                type: String,
                required: true
            },
            interSearch: {
                type: Number,
                required: true
            },
            interPerfection: {
                type: Number,
                required: true
            },
            interCondemnation: {
                type: Number,
                required: true
            },
            interBTF: {
                type: Number,
                required: true
            },
            interVictimization: {
                type: Number,
                required: true
            },
            interAnxious: {
                type: Number,
                required: true
            },
            interAvoidant: {
                type: Number,
                required: true
            },
            interInsecure: {
                type: Number,
                required: true
            },
            interPast:  {
                type: Number,
                required: true
            },
            interProcrastination:  {
                type: Number,
                required: true
            },
    }],
    frist_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true
    },
    age: {
        type: Number,
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
        required: true,
        default: false
    },
});

const AnnonimousUser = mongoose.model('AnnonimousUser', AnnonimousUserSchema);

module.exports = AnnonimousUser