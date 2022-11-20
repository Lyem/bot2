import mongoose from 'mongoose'

const UsuarioSorteSchema = new mongoose.Schema({
  _id: {
    type: String
  },

  numerosorte: {
    type: Number,
    required: true
  },

  tempo: {
    type: Date,
    required: true
  }
})

export default mongoose.model('sorteusuario', UsuarioSorteSchema)
