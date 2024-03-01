import { useState } from 'react'
import Books from './components/Books'
import Authors from './components/Authors'
import AddBook from './components/AddBook'
import {gql, useQuery} from '@apollo/client'


const ALL_AUTHORS = gql`
  query{
    allAuthors{
      name
      born
      bookCount
      id
    }
  }
`
const ALL_BOOKS = gql`
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

function App() {
  const [page, setPage] = useState('authors')

  const booksQry = useQuery(ALL_BOOKS)
  const authorsQry = useQuery(ALL_AUTHORS)

  if(authorsQry.loading){
    if(authorsQry.loading || booksQry.loading) return <div>loading...</div>
  } 

  return (
    <>
      <div>
        <button onClick={()=>setPage('authors')}>authors</button>
        <button onClick={()=>setPage('books')}>books</button>
        <button onClick={()=>setPage('addBook')}>add book</button>
      </div>

      <Authors show={page === 'authors'} authors={authorsQry.data.allAuthors}/>
      <Books show={page === 'books'} books={booksQry.data.allBooks}/>
      <AddBook show={page === 'addBook'}/>
    </>
  )
}

export default App
