import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios';
import Loader from './Loader';
import { useParams } from 'react-router-dom';
function ProductDesc() {
    const [product,setProduct]=useState();
const [loader,setLoader]=useState(true);

const {id}=useParams();


const fetchData=async()=>{
  const data=await axios.get(`https://fakestoreapi.com/products/${id}`);
  setProduct(data.data);
  setLoader(false);

}
useEffect(()=>{
  fetchData();
},[])
  return (
    <>
    {loader?<Loader/>:null}
    <h1>{product?.title}</h1>
    <img src={product?.image} alt="Prodcut image"/>
    </>
  )
}

export default ProductDesc