const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')

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
    genres: ['art', 'home', 'classic']
  },
  {
    title: "Pie Shell",
    author: "Sam Diego",
    id: "3d594450-6436-11e9-bc57-8b80ba54c431",
    published: 1992,
    genres:  ['home', 'food', 'art']
  }
]

const typeDefs = `
  type Author {
    name: String!
    id: ID!
    born: Int
    bookCount: Int
  }

  type Book {
    title: String!
    author: Author!
    id: ID!
    genres: [String!]
  }

  type Query {
    bookCount: Int!
    authorCount : Int!
    allbooks: [Book!]!
    allAuthors: [Author!]!
  }
`

const resolvers = {
  Query: {
    bookCount: () => books.length,
    authorCount: () => authors.length,
    allBooks: () => books,
    allAuthors: () => authors,
  },
  Author: {
    bookCount: (root) => books.filter(b => b.author === root.name).length
  }
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