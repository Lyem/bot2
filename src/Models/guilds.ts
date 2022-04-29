import mongoose from 'mongoose'

const GuildSchema = new mongoose.Schema({
  _id: {
    type: String
  },

  name: {
    type: String,
    required: true
  },

  lastUpdate: {
    type: Date,
    required: true
  },

  timeUpdate: {
    type: Number,
    required: true
  },

  webHook: {
    type: String,
    required: true
  },

  lang: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('guilds', GuildSchema)
