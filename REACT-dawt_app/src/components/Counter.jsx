import { useState } from "react"

function Counter() {
    let [counter,setCounter]=useState(10)



const add=()=>{
        if(counter==10){
            counter=10;
        }
        else{
        setCounter(counter+1);
        }
    }
    function subtract(){
        if(counter==1){
            counter=1;
        }
        else{
        setCounter(counter-1);
        }
    }
  return (
    <div className='d-flex justify-content-center mt-3'>
    <button className='btn btn-primary'onClick={subtract}>-</button>
    <h1>{counter}</h1>
    <button className='btn btn-primary' onClick={add}>+</button>
    </div>
  )
}

export default Counter