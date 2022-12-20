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

const Test = mongoose.model('Test', TestSchema);

module.exports = Test