import img1 from '../../static/img/1.jpg'
import img2 from '../../static/img/2.jpg'
import img3 from '../../static/img/3.jpg'

export const MyProps:React.FC=()=>{
let myarry=[img1,img2,img3]


    return <>hello im MyProps
    <img height={'200px'} src={img1}/>
    <img height={'200px'} src={img1}/>
    <img height={'200px'} src={img1}/>
    <img height={'200px'} src={img1}/>
   <h1>another way</h1>
   <MyImg/>
   {MyImg()}
   <h1>using loop in html</h1>
   {myarry.map((abc)=>{
    return <MyImg/>
   })}

   <h1>using diffent images</h1>
   {myarry.map((im)=>{
    return <MyImg2 gift={im}/>
   })}
    </>
}

let MyImg=()=>{
return  <img height={'200px'} src={img2}/>
}
let MyImg2:React.FC<{gift:any}>=(props)=>{

    return  <img height={'200px'} src={props.gift}/>
    }