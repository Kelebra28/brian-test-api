const mongoose = require('mongoose'); 

const TestSchema = mongoose.Schema({
    name : {
        type: String,
        required :  true
    },
    points : {
        type: String,
        require : true
    }
});

const Test = mongoose.model('Place', TestSchema);

module.exports = Test