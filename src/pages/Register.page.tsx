import { Button, Grid, TextField } from "@mui/material"
import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"

export const Register:React.FC<{}>=()=>{
    let [name,setName] =useState<any>()
   let [email,setEmail] =useState<any>()
   let [password,setPassword] =useState<any>()
   let navigate=useNavigate()
  let handleSubmit=()=>{
    alert(email+" "+password+" "+name)
    navigate('/project/login')
  }
    return <>
    
<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
>
    <h1>this is Register page</h1>
    <TextField id="outlined-basic" label="name" variant="outlined"  onChange={(e)=>{setName(e.target.value)}}/>
<br />
<TextField id="outlined-basic" label="email" variant="outlined"  onChange={(e)=>{setEmail(e.target.value)}}/>
<br />
<TextField id="outlined-basic" label="password" variant="outlined" 
onChange={(e)=>{setPassword(e.target.value)}}/>

<Button variant="contained" onClick={handleSubmit}>Register</Button>
<Link to={'/project/login'}>
<Button variant="text">login</Button></Link>
</Grid>

    </>
}