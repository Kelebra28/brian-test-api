'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema


const TestSchema = new Schema({
  title: {
    type: String,
    required: 'title test'
  },
  points: {
    type: Number,
    required: 'Poits of test'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
});
module.exports = mongoose.model('Test', TestSchema);