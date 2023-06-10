const restful = require('node-restful')
const mongoose = restful.mongoose


var Schema = mongoose.Schema;

const bookInstanceSchema = new mongoose.Schema({
  book: { type: Schema.Types.ObjectId, ref: 'Book', required: true }, //reference to the associated book
  imprint: { type: String, required: true },
  status: { type: String, required: true, enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], default: 'Maintenance' },
  due_back: { type: Date, default: Date.now }
})

bookInstanceSchema
.virtual('url')
.get(function () {
  return '/catalog/bookinstance/' + this._id;
});

module.exports = restful.model('bookInstance', bookInstanceSchema)