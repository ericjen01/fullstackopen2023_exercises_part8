import {Paper, Button, Popover} from "@mui/material"
import Props from './Props'

const AuthorPopover = (
  {name, born, authorPopOn, closeTitlePop, toKeepAuthor, clearField}
) => {

  return (
    <Popover
    {...Props.dupPopover}
    open={authorPopOn}
    hideBackdrop={true}
    style={{ backdropFilter: "blur(1px)", fontFamily:"sans-serif" }}
    onClose={closeTitlePop}
  >
    <Paper {...Props.addBookPaper}>
      <h4>{`Author Already Exists:`}</h4>
      <p>{`${name}, born on ${born}`}</p>
      <div style={{ display:"flex", flexDirection:"column", alignItems:"center" }}>
        <Button {...Props.submitBtn} fullWidth onClick={toKeepAuthor}>Use Existing Author</Button>
        <Button {...Props.submitBtn} 
          onClick={()=>{
            clearField('name')
            clearField('born')
          }}
        >Erase Author</Button>              
      </div>
    </Paper>
  </Popover>
  )
}

export default AuthorPopover