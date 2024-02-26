import { v4 as uuid } from 'uuid';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

let authors = [
  {
    name: 'Sam Diego',
    id: 'afa51rb0-344d-11e9-a414-719c6709cf3e',
    born: 1991,
  },
  {
    name: 'Lori Angels',
    id: 'afe5b6f0-344d-11e9-a414-719c6709cf3e',
    born: 1992,
  },
  {
    name: 'Flora Rita',
    id: 'afa8b6f1-344d-11e9-a414-719c6709cf3e',
    born: 1993,
  },
]

let books = [
  {
    title: "Dead Sea Scroll",
    author: "Sam Diego",
    id: "3d594650-3436-11e9-bc57-8b80ba54c431",
    published: 1991,
    genres:  ['classic', 'mystery']
  },
  {
    title: "Cook Book",
    author: "Lori Angels",
    id: "3d594650-3336-11e9-bc57-8b80ba54h431",
    published: 1992,
    genres:  ['home', 'food']
  },
  {
    title: "Gardens",
    author: "Flora Rita",
    id: "6d594650-3436-11e9-bc57-8b80ba54c431",
    published: 1993,
    genres: ['art', 'home', 'classic']
  },
  {
    title: "Pie Shell",
    author: "Sam Diego",
    id: "3d594450-6436-11e9-bc57-8b80ba54c431",
    published: 1994,
    genres:  ['home', 'food', 'art']
  }
]

const typeDefs = `
  type Author {
    name: String!
    id: ID!
    born: Int!
    bookCount: Int
  }

  type Book {
    title: String!
    author: String!
    id: ID!
    genres: [String!]
  }

  type Query {
    bookCount: Int!
    authorCount : Int!
    allBooks(author: String, genres: String): [Book!]!
    allAuthors: [Author!]!
  }

  type Mutation {
    addBook(
      title: String!
      author: String!
      published: Int!
      genres: [String!]
    ) : Book!

    editAuthor(
      name: String!
      updateBorn: Int!
    ): Author
  }
`


const resolvers = {
  Author: {
    bookCount: (root) => books.filter(b => b.author === root.name).length
  },

  Query: {
    bookCount: () => books.length,
    authorCount: () => authors.length,
    allAuthors: () => authors,
    allBooks: (root, args) => {
      if(args.author && args.genres){
        return books.filter(b => b.author === args.author && b.genres.includes(args.genres))
      }
      else if(args.author){
        return books.filter(b => b.author === args.author)
      }
      else if(args.genres){
        return books.filter(b => b.genres.includes(args.genres))
      }else{
        return books
      }
    },
  },

  Mutation: {
    addBook: (root, args) => {
      const book = {...args, id: uuid()}

      if(!authors.includes(book.author)){
        authors = authors.concat({name:book.author, id:uuid()})
      }
      books = books.concat(book)
      return book
    },

    editAuthor: (root, args) => {
      const author = authors.find(a => a.name === args.name)

      if(!author) return null
      else{
        const authorToUpdate = {...args, born: args.updateBorn}
        authors = authors.map(a => a.name === args.name? authorToUpdate : a)
        return authorToUpdate
      }
    }
  },

}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`Server ready at ${url}`)
})