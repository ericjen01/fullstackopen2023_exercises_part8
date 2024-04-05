import { ADD_BOOK, ALL_AUTHORS, ALL_BOOKS } from "../queries";
import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { Box, Grid, TextField, Button} from "@mui/material"
import Props from './Props'
import BookPopover from "./BookPopover";
import AuthorPopover from "./AuthorPopover";


const AddBook = ({setNoti}) => {
  const currentYear = new Date().getFullYear()
  const [titlePopOn, setTitlePopOn] = useState(false)
  const [authorPopOn, setAuthorPopOn] = useState(false)
  const [born, setBorn] = useState('')
  const [titleFieldOff, setTitleFieldOff] = useState(false)
  const [nameFieldOff, setNameFieldOff] = useState(false)
  const [bornFieldOff, setBornFieldOff] = useState(false)
  const [publishedFieldOff, setPublishedFieldOff] = useState(false)
  const [labelBorn, setLabelBorn] = useState('')
  const [labelPublished, setLabelPublished] = useState('')
  const {data:{allBooks}} = useQuery(ALL_BOOKS) 

  const [title, setTitle] = useState('')
  const [name, setName] = useState('')
  const [published, setPublished] = useState('')
  const [genre, setGenre] = useState('')
  const [genres, setGenres] = useState([])

  const validateYear = (value, type) => {
    const input = value
    if(!input || input > currentYear) {
      type === 'born' && (
        setLabelBorn(`${String.fromCharCode(9888)} Error: Year must be between 0~${currentYear}`)
      )
      type === 'published' && (
        setLabelPublished(`${String.fromCharCode(9888)} Error: Year must be between 0~${currentYear}`)
      )
      setTimeout(() => {
        type === 'born' && (
          setBorn(''), setLabelBorn('')
        )
        type === 'published' && (
          setPublished(''), setLabelPublished('')
        ) 
      }, 2000);
    }  
    else{
      type === 'born' && ( setBorn(input))
      type === 'published' && ( setPublished(input))
    }     
  }

  const toEditBook = () => {
    setName(name)
    setBorn(born)
    setTitleFieldOff(false)
    setPublishedFieldOff(false)
    setNameFieldOff(true)
    setBornFieldOff(true)
    setTitlePopOn(false)
  }

  const clearField = (type) => {
    setTitlePopOn(false)
    setAuthorPopOn(false)
    switch (type){
      case 'title' : 
        setTitle('')
        setTitleFieldOff(false) 
        break
      case 'published' : 
        setPublished('')
        setPublishedFieldOff(false);  
        break  
      case 'name' : 
        setName('')
        setNameFieldOff(false)
        break
      case 'born' : 
        setBorn('')
        setBornFieldOff(false)
        break
      default : null
    }
  }

  const toAddAuthor = () => {
    setTitlePopOn(false) 
    setTitleFieldOff(true)
    setPublishedFieldOff(true)
    setNameFieldOff(false)
    setBornFieldOff(false)
  }

  const toKeepAuthor = () => {
    setNameFieldOff(true)
    setBornFieldOff(true)
    setAuthorPopOn(false)
  }

  const closeTitlePop = () => setTitlePopOn(false)

  const validateBook = () => {
    const dupo = (allBooks.find(b =>( b.title === title.trim() && b.published === published.trim())))
    if(dupo){
      setName(dupo.author.name)
      setBorn(dupo.author.born)
      setPublished(dupo.published)
      setGenres(dupo.genres.toString())
      setTitlePopOn(true)
    }else{
      setNameFieldOff(false)
      setBornFieldOff(false)
    }
  }
  
  const validateAuthor = () => {
    const dupo = (allBooks.find(b =>( b.author.name === name.trim() && b.author.born === born.trim())))
    if(dupo){
      setName(dupo.author.name)
      setBorn(dupo.author.born)
      setAuthorPopOn(true)
    }
  }

  //returns an array and assigns array's 1st element (a function) to createBook 
  //see queres file
  const [createBook] = useMutation( 
    ADD_BOOK, {
      refetchQueries:[{query:ALL_BOOKS},{query:ALL_AUTHORS}],
      onCompleted:() => {
        setNoti('book added')
      },
      onError:(err) => {
        console.log("err: ", err)
        const msg  = err.map(e => e.message)
        setNoti(msg)
      }
    }
  )
  
  const toSubmit = async (e) => {
    e.preventDefault()
    const dupo = (allBooks.find( b => (
      b.title === title
      && b.published === published.trim()
      && b.author.name === name.trim()
      && b.author.born === born.trim()
    )))
    if(dupo) setTitlePopOn(true)
    else{
      createBook({variables: {title, name, born, published, genres}})
      setTitle('')
      setGenre('')
      setGenres('')
      setName('')
      setPublished('')
      setBorn('')
    }
  }

  const addGenre = () => {
    setGenres(genres.concat(genre))
    setGenre('')
  }

  const undoGenre = () => {
    setGenres(genres.slice(0,-1))
  }

  return (
    <div {...Props.addBookFormPosition}>
    <Box {...Props.addBookPaper}>
      <form onSubmit={toSubmit} >
        <Grid container direction='column'spacing={3}> 
          <Grid item>
            <span {...Props.fontStySans}>Title</span>
            <TextField 
              {...Props.addBookTxtField}                         
              autoFocus
              value={title} 
              disabled={titleFieldOff}
              onBlur={()=>validateBook()}
              onChange={({target})=>{setTitle(target.value)}}
              InputProps={{ 
                endAdornment: 
                <div> {titleFieldOff && <button onClick={()=>clearField('title')}>X</button>} </div>
              }}
            />
            <BookPopover 
              title={title} 
              published={published} 
              name={name} born={born} 
              genres={genres} 
              titlePopOn={titlePopOn} 
              closeTitlePop={closeTitlePop} 
              toEditBook={toEditBook} 
              toAddAuthor={toAddAuthor} 
              clearField={clearField}
            />
          </Grid>
          <Grid item>
            <span {...Props.fontStySans}>Year of Publish</span>
            <TextField
              {...Props.yearTxtfield}
              onChange={({target}) => {
                validateYear(target.value, 'published')
              }}
              value={published}
              label={labelPublished}
              disabled={publishedFieldOff}
              onBlur={()=>validateBook()}
              placeholder={`(0~${currentYear})`}
              InputProps={{
                endAdornment: 
                <div>
                  {publishedFieldOff && <button onClick={()=>clearField('published')}>X</button>}
                </div>
              }}
            />
          </Grid>
          <Grid item>
            <span {...Props.fontStySans}>Author</span>
            <TextField 
              {...Props.addBookTxtField}                          
              value={name} 
              disabled={nameFieldOff}
              onBlur={()=>validateAuthor()}
              onChange={({target})=>{setName(target.value)}}
              InputProps={{
                endAdornment: 
                <div>
                  {nameFieldOff && <button onClick={()=>clearField('name')}>X</button>}
                </div>
              }}
            />
          <AuthorPopover 
            name={name} 
            born={born} 
            authorPopOn={authorPopOn} 
            closeTitlePop={closeTitlePop} 
            toKeepAuthor={toKeepAuthor} 
            clearField={clearField}
          />    
          </Grid>
          <Grid item>  
            <span {...Props.fontStySans}>Author Birth Year</span>
            <TextField
              {...Props.yearTxtfield}
              onChange={({target}) => {
                validateYear(target.value, 'born')}}
              disabled={bornFieldOff}
              label={labelBorn}
              value={born}
              onBlur={()=>validateAuthor()}
              placeholder={`(0~${currentYear})`}
              InputProps={{
                endAdornment: 
                <div>
                  {bornFieldOff && <button onClick={()=>clearField('born')}>X</button>}
                </div>
              }}
            />
          </Grid>
          <Grid item >
            <div style={{display:'flex', alignItems:'center'}}>
              <span {...Props.fontStySans}>Genre(s): </span>
              {genres.length >0 && <span {...Props.genreList}>{genres.join(', ').toString()}</span>}        
              {genres.length>0 && <Button {...Props.smallSqrBtn} onClick={undoGenre}> {String.fromCharCode(8634)} </Button>}        
            </div>
            <div style={{display:'flex', alignItems:'center'}}>
              {genre && <Button {...Props.smallSqrBtn} onClick={addGenre}> {String.fromCharCode(43)} </Button>}
              <TextField 
                {...Props.addBookTxtField}  
                value={genre} 
                onChange={({target})=>{ setGenre(target.value)}}  
              />   
            </div>    
          </Grid>
        </Grid>
        <Button {...Props.submitBtn} sx={{mt:5}}>create book</Button>
      </form>
      </Box>
    </div>
  )
}

export default AddBook
