import { Grid } from "@mui/material"
import { Mycarousel } from "../components/carousel/Mycarousel"
import { MyNavbar } from "../components/navbar/MyNavbar"
import { Mycard } from "../components/cards/Mycard"
import img1 from '../static/img/1.jpg'
import { useEffect, useState } from "react"
import { flipkartApi } from "../api/flipkart"

export const Home:React.FC<{}>=()=>{
    let [data,setData]=useState<any>([]);
    useEffect(()=>{
(async()=>{
    setData(await flipkartApi()) 
})()
    },[])
    return <>
    <MyNavbar/>
    <br />
    <Grid

  direction="row"
  justifyContent="center"
  alignItems="center"
>
<Mycarousel/>
</Grid>
<br />
<Grid
  container
  direction="row"
  justifyContent="space-around"
  alignItems="center"
>
<Mycard img={img1}/>
<Mycard img={img1}/>
<Mycard img={img1}/>
<Mycard img={img1}/>

</Grid>
<h1>static way</h1>

<br />
<Grid
  container
  direction="row"
  justifyContent="space-around"
  alignItems="center"
>
{data.map((item:any)=>{return <Mycard img={item.image}/>})}


</Grid>
 
</>
}