const mongoose = require('mongoose')
const Schema = mongoose.Schema
const recordSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  dateString: {
    type: String,
    default: '',
  },
  categoryImage: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
})
module.exports = mongoose.model('Record', recordSchema)
