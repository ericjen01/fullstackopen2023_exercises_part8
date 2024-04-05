const fontStySans = {
  style: {fontFamily:"sans-serif"}
}

const genreList = {
  style: {
    fontFamily:"sans-serif",
    marginLeft:"15px"
  }
}

const flexRow = {
  style:{
    display:'flex', 
    flexDirection:'row'
  }
}

const flexColumn = {
  style:{
    display:'flex', 
    flexDirection:'column',
    alignItems: 'center',
  }
}
/*
const clickBtn = {
  variant:'contained',
  color:'primary',
  size:'medium', 
  type:'button'
}
*/

const smallSqrBtn = {
  sx:{
    maxWidth:'20px', 
    maxHeight:'20px', 
    minWidth:'20px', 
    minHeight:'20px',
    mx:'8px',
    fontSize: '25px',
  },
  
}

const submitBtn = {
  variant:'contained',
  fullWidth:true,
  color:'primary',
  size:'medium', 
  type:'submit',
  sx:{my:3}
}

const appBarBtn = {
  color: 'inherit',
  size:'small', 
}

const editAuthorTxtfield = {
  size:'small', 
  type:"number",
  sx:{m:'7px'}
}

const yearTxtfield = {
  size:'small', 
  type:"number",
  variant:'standard', //removes border
  fullWidth:true, 
  label:'',
}




const dupPopover = {
  anchorReference:"anchorPosition",
  anchorPosition:{ top:100, left:100},  
  trasformorigin: {vertical: 'top', horizontal: 'right',},
  anchororigin: {vertical: 'top',horizontal: 'right'},
  elevation:3,
}

const addBookFormPosition = {
  style: {
    justifyContent: 'center',
    display: 'flex',
  }
}

const addBookPaper = {
  sx: {
    my:'3%', 
    p:'10px'
  }
}

const loginBox = {
  style:{
    marginTop: '20px',
    minWidth: '300px',
    maxWidth: '400px'
  }
}

const loginUserBox = {
  margin:"normal",
  required:true,
  fullWidth:true,
  id:"email",
  name:"email",
  autoComplete:"email",
  autoFocus:true,
}

const loginPassword = {
  margin:"normal",
  required:true,
  fullWidth:true,
  id:"password",
  name:"password",
  type:"password",
  autoComplete:"current-password",
}

const addBookTxtField = {
  variant:'standard', //removes border
  fullWidth:true, 
  size:'small', 
  label:'',
}

export default {
  flexRow,
  flexColumn,
  genreList,
  submitBtn,
  appBarBtn, 
  smallSqrBtn,
  fontStySans, 
  yearTxtfield,
  editAuthorTxtfield,
  dupPopover,
  addBookPaper, 
  loginBox,
  addBookFormPosition,
  loginUserBox,
  loginPassword,
  addBookTxtField
}