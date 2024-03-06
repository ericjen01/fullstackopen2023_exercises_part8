import Books from './components/Books'
import Authors from './components/Authors'
import AddBook from './components/AddBook'
import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { ALL_AUTHORS, ALL_BOOKS } from './queries'
import Notify from './components/Notify'
import { Container, AppBar, Toolbar, Button } from '@mui/material'
import { Routes, Route, Link} from 'react-router-dom'
import Sty from './components/Styling'


function App() {
  const [msg, setMsg] = useState('')

  const booksQry = useQuery(ALL_BOOKS)
  const authorsQry = useQuery(ALL_AUTHORS)

  if(authorsQry.loading || booksQry.loading) return console.log('loading...')

  const notify = (input) => {
    setMsg(input)
    setTimeout(() => {
      setMsg('')
    }, 30000);
  }

  return (
    <Container>
      <AppBar position='sticky'>
        <Toolbar>
          <Button {...Sty.appBarBtn} component={Link}to='/'>Authors</Button>
          <Button {...Sty.appBarBtn} component={Link}to='/books'>Books</Button>
          <Button {...Sty.appBarBtn} component={Link}to='/addbook'>Add Book</Button>
        </Toolbar>
      </AppBar>
      <Notify msg={msg} />
      
      <Routes>
        <Route path='/' element={<Authors/>} />
        <Route path='/books' element={<Books/>} />
        <Route path='/addbook' element={<AddBook setNoti={notify}/>} />
      </Routes>
    </Container>
  )
}

export default App
