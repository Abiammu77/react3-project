import { Button, Paper } from "@mui/material"
import { Link, Outlet } from "react-router-dom"
import { AllLEssons } from "../pages/AllLEssons"
import { MyHook } from "../components/MyHook"
import { Login } from "../pages/Login.page"
import { Register } from "../pages/Register.page"
import { Layout } from "../layout/Layout"
import { Home } from "../pages/Home.page"

export const EntryRoads={
    path:'/',
    element:<>
        <Paper>  
        <h1>where do u want to go</h1>
        <Link to="/all-lessons"> <Button variant="contained" color="success">
  lessons
</Button>
</Link>
<Link to={"/project/login"}>
<Button variant="outlined" color="error">
project
</Button></Link>
      
        </Paper>
    </>
}


export const AllLessons={
    path:'/all-lessons',
    element:<AllLEssons/>
}

export const AllProject={
    path:'/project',
    element:<><Layout><Outlet/></Layout></>,
    children:[
{
    path:'login',
    element:< Login/>
},
{
    path:'register',
    element:<Register/>
},
{
    path:'home',
    element:<Home/>
}
    ]
}