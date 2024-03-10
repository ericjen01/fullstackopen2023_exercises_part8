import { ADD_BOOK, ALL_AUTHORS, ALL_BOOKS } from "../queries";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { Grid, TextField, Paper, Button} from "@mui/material"
import Props from './Props'

const AddBook = ({setNoti}) => {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [published, setPublished] = useState('')
  const [genre, setGenre] = useState('')
  const [genres, setGenres] = useState([])
  //const [errMsg] = useState('')

  //returns an array and assigns array's 1st element (a function) to createBook 
  //see queres file
  const [createBook] = useMutation( 
    ADD_BOOK, {
      refetchQueries:[{query:ALL_BOOKS},{query:ALL_AUTHORS}],
      onCompleted:(res) => {
        setNoti(`${res.addBook.title} added`)
        console.log('res: ', res)
      },
      onError:({graphQLErrors}) => {
        const msg  = graphQLErrors.map(e => e.message)
        setNoti(msg)
      }
    }
  )
  
  const toSubmit = async (e) => {
    e.preventDefault()

    //The query variables receive values when the query is made:
    createBook({variables: {title, author, published, genres}})
    console.log('createbook: ', useMutation)

    setTitle('')
    setGenre('')
    setGenres('')
    setAuthor('')
    setPublished('')
  }

  const addGenre = () => {
    setGenres(genres.concat(genre))
    setGenre('')
  }

  return (
    <div {...Props.addBookFormPosition}>
    <Paper {...Props.addBookPaper}>
      <form onSubmit={toSubmit} >
        <Grid container direction='column'spacing={3}> 
          <Grid item>
            <span {...Props.fontStySans}>Title</span>
            <TextField 
              {...Props.addBookTxtField}                         
              value={title} 
              onChange={({target})=>setTitle(target.value)}
            />
          </Grid>
          <Grid item>
            <span {...Props.fontStySans}>Author</span>
            <TextField 
              {...Props.addBookTxtField}                          
              value={author} 
              onChange={({target})=>setAuthor(target.value)}
            />
          </Grid>
          <Grid item>
            <span {...Props.fontStySans}>Year The Book Published</span>
            <TextField 
              {...Props.addBookTxtField}                         
              value={published} 
              onChange={({target})=>setPublished(target.value)}
            />
          </Grid>
        </Grid>
        <Button {...Props.submitBtn} sx={{mt:5}}>create book</Button>
      </form>
      </Paper>
    </div>
  )
}

export default AddBook

/*
  <div>
          <>title</>
          <input value={title} onChange={({target}) => setTitle(target.value)}/><br/>
          <>author</>
          <input value={author} onChange={ e => setAuthor(e.target.value)}/><br/>
          <>published</>
          <input value={published} onChange={ e => setPublished(e.target.value)}/><br/>
        </div>

        <div>
          <input value={genre} onChange={ e => setGenre(e.target.value)}/>
          <button onClick={addGenre}>add genre</button>
        </div>


*/