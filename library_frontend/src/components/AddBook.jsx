import { useState } from "react";

const AddBook = ({show}) => {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [pbulish, setPublish] = useState('')
  const [genre, setGenre] = useState('')
  const [genres, setGenres] = useState([])

  if (!show) return null
  
  const submit = async (e) => {
    e.preventDefault()
    console.log('...adding book')

    setTitle('')
    setGenre('')
    setGenres('')
    setAuthor('')
    setPublish('')
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
          <input value={pbulish} onChange={ e => setPublish(e.target.value)}/><br/>
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