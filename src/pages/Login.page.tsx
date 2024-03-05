import { Button, Grid, TextField } from "@mui/material"
import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"

export const Login:React.FC<{}>=()=>{
   let [email,setEmail] =useState<any>()
   let [password,setPassword] =useState<any>()
   let navigate=useNavigate()
  let handleSubmit=()=>{
    alert(email+" "+password)
    navigate('/project/home')
  }
    return <>
    
<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
>
    <h1>this is login page</h1>
<TextField id="outlined-basic" label="email" variant="outlined"  onChange={(e)=>{setEmail(e.target.value)}}/>
<br />
<TextField id="outlined-basic" label="password" variant="outlined" 
onChange={(e)=>{setPassword(e.target.value)}}/>

<Button variant="contained" onClick={handleSubmit}>Login</Button>
<Link to={'/project/register'}>
<Button variant="text">register</Button>
</Link>

</Grid>

    </>
}