import {gql} from '@apollo/client'

export const ALL_AUTHORS = gql`
  query{
    allAuthors{
      name
      born
      bookCountByAuthor
      id
      bookListByAuthor{
        title
        published
        id
        genres
      }
    }
  }
`
export const ALL_BOOKS = gql`
  query{
    allBooks{
      title
      published
      author{
        name
        born
        id
      }
      id
      genres
    }
  } 
`
export const ADD_BOOK = gql`
  mutation addBook(
    $title:String!, 
    $name: String,
    $born: String,
    $id: ID,
    $published:String!, 
    $genres:[String!]!
  ) {
      addBook(
        title: $title,
        author: {
          name: $name,
          born: $born,
          id: $id,
        },
        published: $published,
        genres: $genres,
      ) {
          title
          published
          author{name born id}
          genres
        }
    }
`

export const EDIT_AUTHOR = gql`
  mutation editAuthor(
    $id:String!, 
    $born:String!,
  ) {
      editAuthor(
        id: $id,
        born: $born
      ) {
          id
          born 
        }
    }
`

export const LOGIN = gql`
  mutation login($username: String!, $password: String!){
    login(username: $username, password: $password){
      value
    }
  }
`