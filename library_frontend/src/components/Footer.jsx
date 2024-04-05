import { Typography, Link } from "@mui/material";

const Footer = (props) => {

  return(
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
      <Link color='inherit' href='/'> THE LIBRARY </Link> 
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
} 

export default Footer