import { useEffect, useState } from "react"
import { flipkartApi } from "../../api/flipkart"

export const MYuseEffect:React.FC<{}>=()=>{
    let [mydata,setMyData]=useState<any>([])
    
    useEffect(()=>{
        (async ()=>{
            setMyData(await flipkartApi())
        })()
       
    },[])
    console.log('1234',mydata)
   
   let changer=()=>{
    alert('k')
    setMyData('im a women')
   }
    console.log('im there ',mydata)
    return <>

{mydata.map((item:any)=>{ return <img height='200px' src={`${item.image}`}/>})}
    
    </>
}