import {gql} from '@apollo/client'

export const ALL_AUTHORS = gql`
  query{
    allAuthors{
      name
      born
      bookCount
      id
    }
  }
`
export const ALL_BOOKS = gql`
  query{
    allBooks{
      title
      author
      published
      id
      genres
    }
  } 
`
export const ADD_BOOK = gql`
  mutation CreateBook(
    $title:String!, 
    $author:String!,
    $published:String!, 
    $genres:[String!]!
  ) {
      addBook(
        title: $title
        author: $author
        published: $published
        genres: $genres
      ) {
          title
          author
          published
          id
          genres
        }
    }
`