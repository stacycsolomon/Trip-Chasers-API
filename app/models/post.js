const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  description: {
    type: String,
    max: 500
  },
  img: {
    type: String
  },
  likes: {
    type: Array,
    default: []
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Post', postSchema)
