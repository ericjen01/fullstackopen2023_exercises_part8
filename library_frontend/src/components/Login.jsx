import { useEffect, useState } from "react"
import { Grid, Typography, Box, TextField, Checkbox, Link, Button, FormControlLabel } from "@mui/material"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { LOGIN } from "../queries";
import Props from './Props'
import Avatar from '@mui/material/Avatar';
import { useMutation } from '@apollo/client'


const Login = ({setNoti, setError, setToken, show}) => {

  const [userName, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [login, res] = useMutation(LOGIN, {
    onError:(err)=>{
      setError(err.graphQLErrors[0].message)
    }
  })

  useEffect(()=>{
    if(res.data){
      const token = res.login.value
      setToken(token)
      localStorage.setItem('userToken', token)
    }
  },[res.data, res.login.value, setToken])

  if(!show) return null

  const handleLogin = async (e) =>{
    e.preventDefault()
    login({variables:{userName, password}})
    setUsername('')
    setPassword('')
  }

  return(
    <div {...Props.flexColumn}>
      <Box {...Props.loginBox}>
        <Box {...Props.flexColumn}>
          <Avatar sx={{m:1, bgcolor:'secondary.main'}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleLogin} noValidate>
            <TextField 
             {...Props.loginUserBox} 
              label={"Email Address"}
              onChange={({target}) => setUsername(target.value)}
            />
            <TextField 
              {...Props.loginPassword} 
              label={"Password"}
              onChange={({target}) => setPassword(target.value) }
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button {...Props.submitBtn}>
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>


        </Box>
      </Box>
    </div>
  )
}

export default Login