import "./About.css"
import {useState,useEffect} from "react"
function AboutUs() {
const [data,setData]=useState(null);
const [counter,setCounter]=useState(0)
const [name,setName]=useState();
const fetchData=async()=>{
  try{
  const response=await fetch(`https://fakestoreapi.com/products/${name}`);
  console.log(response)
  const data=await response.json();
  setData(data);
  }
  catch(err){
    console.log(err)
  }
}
useEffect(()=>{
  fetchData();
  console.log("Arslan Akmal")
},[name])
console.log(data)
  return (
    <>
 <input type="text" placeholder="Enter your name to search for github" value={name} onChange={(e)=>setName(e.target.value)} />
 <h1>My name is:{name}</h1>
  <h1>{data?.title}</h1>
  <img src={data?.image} alt="Profile Image"/>

  </>
  )
}

export default AboutUs