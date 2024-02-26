const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')

let authors = [
  {
    name: 'Sam Diego',
    id: 'afa51rb0-344d-11e9-a414-719c6709cf3e',
  },
  {
    name: 'Lori Angels',
    id: 'afe5b6f0-344d-11e9-a414-719c6709cf3e',
  },
  {
    name: 'Flora Rita',
    id: 'afa8b6f1-344d-11e9-a414-719c6709cf3e',
  },
]

let books = [
  {
    title: "Dead Sea Scroll",
    author: "Sam Diego",
    id: "3d594650-3436-11e9-bc57-8b80ba54c431"
  },
  {
    title: "Cook Book",
    author: "Lori Angels",
    id: "3d594650-3336-11e9-bc57-8b80ba54h431"
  },
  {
    title: "Gardens",
    author: "Flora Rita",
    id: "6d594650-3436-11e9-bc57-8b80ba54c431"
  },
  {
    name: "Pie Shell",
    author: "Sam Diego",
    id: "3d594450-6436-11e9-bc57-8b80ba54c431"
  }
]

const typeDefs = `
  type Query {
    bookCount: Int!
    authorCount : Int!
    allbooks: [Book!]!
  }
`

const resolvers = {
  Query: {
    bookCount: () => books.length,
    authorCount: () => authors.length,
    allBooks: () => books,
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