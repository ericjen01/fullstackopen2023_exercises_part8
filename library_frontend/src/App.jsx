import Login from './components/Login'
import Books from './components/Books'
import Authors from './components/Authors'
import AddBook from './components/AddBook'
import Author from './components/Author'
import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { ALL_AUTHORS, ALL_BOOKS } from './queries'
import Notify from './components/Notify'
import { Container, AppBar, Toolbar, Button } from '@mui/material'
import { Routes, Route, Link} from 'react-router-dom'
import Props from './components/Props'
import Footer from './components/Footer'


function App() {
  const [msg, setMsg] = useState('')

  const booksQry = useQuery(ALL_BOOKS)
  const authorsQry = useQuery(ALL_AUTHORS)

  if(authorsQry.loading || booksQry.loading) return console.log('loading...')

  const notify = (input) => {
    setMsg(input)
    setTimeout(() => {
      setMsg('')
    }, 4000);
  }

  return (
    <Container>
      <AppBar position='sticky'>
        <Toolbar>
          <Button {...Props.appBarBtn} component={Link}to='/login'>Login</Button>
          <Button {...Props.appBarBtn} component={Link}to='/'>Authors</Button>
          <Button {...Props.appBarBtn} component={Link}to='/books'>Books</Button>
          <Button {...Props.appBarBtn} component={Link}to='/addbook'>Add Book</Button>
        </Toolbar>
      </AppBar>
      <Notify msg={msg} />
      <Routes>
        <Route path='/' element={<Authors setNoti={notify}/>} />
        <Route path='/login' element={<Login setNoti={notify}/>} />
        <Route path='/books' element={<Books/>} />
        <Route path='/addbook' element={<AddBook setNoti={notify}/>} />
        <Route path='/search' element={<Author setNoti={notify}/>} />
      </Routes>
      <Footer sx={{ mt: 8, mb: 4 }} />
    </Container>
  )
}

export default App
