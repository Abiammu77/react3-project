import { useState } from "react"

export const MyHook:React.FC<{}>=()=>{
    let [val,setVal]=useState('1')
    return <h1>
        <input type="text" name="" id="" onChange={(e)=>{setVal(e.target.value)}} />
        {val}
    </h1>
}