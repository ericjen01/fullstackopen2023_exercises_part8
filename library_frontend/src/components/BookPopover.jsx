import {Paper, Button, Popover} from "@mui/material"
import Props from './Props'

const BookPopover = (
  {title, published, name, born, genres, titlePopOn, closeTitlePop, toEditBook, toAddAuthor, clearField}
) => {

  return(
      <Popover
      {...Props.dupPopover}
      open={titlePopOn}
      hideBackdrop={true}
      style={{ backdropFilter: "blur(1px)", fontFamily:"sans-serif" }}
      onClose={closeTitlePop}
    >
      <Paper {...Props.addBookPaper}>
        <h4>{`Book Already Exists:`}</h4>
        <p>{`"${title}", published in: ${published}`}</p>
        <p>{`by ${name}, born in ${born}`}</p>
        <p>{`Genres: ${genres}`}</p>
        <div {...Props.flexColumn}>
          <Button {...Props.submitBtn} onClick={toEditBook}>Edit Book</Button>
          <Button {...Props.submitBtn} onClick={toAddAuthor}>Edit Author</Button>
          <Button {...Props.submitBtn} 
            onClick={()=>{
              clearField('title')
              clearField('published')
              }}
          >Erase Book</Button>
        </div>
      </Paper>
    </Popover>
  )
}

export default BookPopover