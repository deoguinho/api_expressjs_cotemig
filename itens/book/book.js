const restful = require('node-restful')

const mongoose = restful.mongoose
var Schema = mongoose.Schema;


const bookSchema = new mongoose.Schema({

    title: { type: String, required: true },
    author: {type: Schema.Types.ObjectId, ref: 'Author', required: true},
    summary: {type: String, required: true},
    ISBN: {type: String, required: true},
    genre: [{type: Schema.Types.ObjectId, ref: 'Genre'}]
  })

module.exports = restful.model('Book', bookSchema)