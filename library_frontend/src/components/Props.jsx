const fontStySans = {
  style: {fontFamily:"sans-serif"}
}

const clickBtn = {
  variant:'contained',
  color:'primary',
  size:'medium', 
  type:'button'
}

const submitBtn = {
  variant:'contained',
  color:'primary',
  size:'medium', 
  type:'submit'
}

const appBarBtn = {
  color: 'inherit',
  size:'small', 
}

/*
const yearPicker = {
  slotProps: {textField: { size:"small"}},
  label:'Change Year',
  sx: {maxWidth:'200px'},
  size: 'small',          
  views: ["year"],

}*/

const editAuthorTxtfield = {
  size:'small', 
  type:"number",
  sx:{width:190},
}

const editAuthorForm = {
  boxShadow:'1px 1px 5px grey',
  borderRadius:'5px', 
  padding:'10px', 
  margin:'5px', 
}

const editAuthorPopover = {
  trasformorigin: {vertical: 'top', horizontal: 'left',},
  anchororigin: {vertical: 'top',horizontal: 'left'},
  elevation:0,
}

const addBookFormPosition = {
  style: {
    justifyContent: 'center',
    display: 'flex',
  }
}

const addBookPaper = {
  sx: {
    width:'40%', 
    my:'3%', 
    p:'2%'
  }
}

const addBookTxtField = {
  variant:'standard', //removes border
  fullWidth:'any', 
  size:'small', 
  label:'',
}

export default {
  clickBtn,
  submitBtn,
  fontStySans, 
  appBarBtn, 
  editAuthorTxtfield,
  editAuthorForm, 
  editAuthorPopover, 
  addBookPaper, 
  addBookFormPosition,
  addBookTxtField
}