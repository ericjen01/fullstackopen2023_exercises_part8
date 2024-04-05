import mongoose from 'mongoose'
//import uniqueValidator from 'mongoose-unique-validator'


const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 1
  },
  born: {
    type: Number,
    required: true,
    minLength: 1
  }, 
  bookCount: {
    type: Number
  },
  bookListByAuthor:[{
    title: String,
    published: Number,
    genres: [
      { type: String} 
    ]
  }]
})
authorSchema.set('toJSON', {
	transform: (document, returnedObj) => {
		returnedObj.id = returnedObj._id.toString()
		delete returnedObj._id
		delete returnedObj.__v
	},
})

//schema.plugin(uniqueValidator)

const Author = mongoose.model('Author', authorSchema)

export default Author

