import mongoose from 'mongoose'

//import uniqueValidator from 'mongoose-unique-validator'

const bookSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true,
    minLength: 1,
  },
  published: {
    type: Number,
    required: true,
    minLength: 1
  },
  author: {
    id: {type: String},
    name: {type: String},
    born: {type: String},
  },
  genres: [
    { type: String} 
  ]
})
bookSchema.set('toJSON', {
	transform: (document, returnedObj) => {
		returnedObj.id = returnedObj._id.toString()
		delete returnedObj._id
		delete returnedObj.__v
	},
})
//schema.plugin(uniqueValidator)

const Book = mongoose.model('Book', bookSchema)

export default Book
