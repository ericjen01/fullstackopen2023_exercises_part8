//import { v4 as uuid } from 'uuid'
import {ApolloServer} from '@apollo/server'
import {startStandaloneServer} from '@apollo/server/standalone'

import mongoose from 'mongoose'
import Author from './models/author.js'
import Book from './models/book.js'
import { GraphQLError } from 'graphql';
import "dotenv/config.js";
import { useState } from 'react'


// eslint-disable-next-line no-undef
const MONGO_URI = process.env.MONGO_URI
console.log('connecting to', MONGO_URI)
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })


const typeDefs = `

  type Book {
    title: String!
    published: String!
    author:AuthorInfo
    id: ID
    genres: [String]    
  }

  type AuthorInfo {
    id: ID
    name: String,
    born: String,
  }

  type Query {
    bookCount: Int!
    authorCount: Int!
    allBooks: [Book!]!
    allAuthors:[AuthorInfo]
  }
`
const resolvers = {
  Query:{
    allBooks: async() => await Book.find({}),
    allAuthors: async() => await Book.find({},{'data.allBooks.author':1})
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`Server ready at ${url}`)
})