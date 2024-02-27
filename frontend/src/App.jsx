import { useState } from 'react'
import Books from './components/Books'
import Authors from './components/Authors'
import AddBook from './components/AddBook'

function App() {
  const [page, setPage] = useState('authors')

  return (
    <>
      <div>
        <button onClick={()=>setPage('authors')}>authors</button>
        <button onClick={()=>setPage('books')}>books</button>
        <button onClick={()=>setPage('addBook')}>add book</button>
      </div>

      <Authors show={page === 'authors'}/>
      <Books show={page === 'books'}/>
      <AddBook show={page === 'addBook'}/>
    </>
  )
}

export default App
