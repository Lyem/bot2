import mongoose from 'mongoose'

const PlusSchema = new mongoose.Schema({
  _id: {
    type: String
  },

  name: {
    type: String,
    required: true
  },

  qt: {
    type: Number,
    required: true
  },

  lastUpdate: {
    type: Date,
    required: true
  },

  createAt: {
    type: Date,
    required: true
  }
})

module.exports = mongoose.model('plusschema', PlusSchema)
