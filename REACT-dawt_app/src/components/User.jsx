import {useState,useEffect} from 'react'
import "./User.css"
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loader from './Loader';
function User() {
const [products,setProducts]=useState([]);
const [loader,setLoader]=useState(true);

const fetchData=async()=>{
  const data=await axios.get("https://fakestoreapi.com/products");
  setProducts(data.data);
  setLoader(false);

}
useEffect(()=>{
  fetchData();
},[])

    return (
        <>
        {loader?<Loader/>:null}
        <div className="d-flex justify-content-center flex-wrap">
  {products.map((item)=>{
    return(
      <div class="card" style={{width: "18rem"}}>
  <img src={item.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{item.title}</h5>
    <p class="card-text">{item.description}</p>
    <p class="card-text">{item.price}</p>
    <Link to={`/products/${item.id}`} class="btn btn-primary">View More</Link>
  </div>
</div>
    )
  })}
</div>

    </>
  )
}

export default User