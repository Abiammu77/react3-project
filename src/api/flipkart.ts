export const flipkartApi=async()=>{

let data=fetch('https://fakestoreapi.com/products')
data=await (await data).json()
return data
}