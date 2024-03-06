import { useMutation } from "@apollo/client";
import { useState } from "react";
import { ADD_BOOK, ALL_AUTHORS, ALL_BOOKS } from "../queries";


const AddBook = ({setNoti}) => {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [published, setPublished] = useState('')
  const [genre, setGenre] = useState('')
  const [genres, setGenres] = useState([])
  //const [errMsg] = useState('')

  const [createBook] = useMutation(
    ADD_BOOK, {
      refetchQueries:[{query:ALL_BOOKS},{query:ALL_AUTHORS}],
      
      onCompleted:(res) => setNoti(`${res.addBook.title} added`),

      onError:({graphQLErrors}) => {
        const msg  = graphQLErrors.map(e => e.message)
        setNoti(msg)
      }
    }
  )
  
  const submit = async (e) => {
    e.preventDefault()

    createBook( {variables: {title, author, published, genres}})

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
    <>
      <form onSubmit={submit}>
        <div>
          <>title</>
          <input value={title} onChange={ e => setTitle(e.target.value)}/><br/>
          
          <>author</>
          <input value={author} onChange={ e => setAuthor(e.target.value)}/><br/>
          
          <>published</>
          <input value={published} onChange={ e => setPublished(e.target.value)}/><br/>
        </div>

        <div>
          <input value={genre} onChange={ e => setGenre(e.target.value)}/>
          <button onClick={addGenre}>add genre</button>
        </div>
        <button type='submit'>create book</button>
      </form>
    </>
  )
}

export default AddBook