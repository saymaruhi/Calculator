import { useState } from "react";

function Add() {
const[value,setValue]= useState("")




const handleClick= (e)=> {
   
    setValue(value + e.target.value)
}



  return (
   <div>
     Q1.  How to make button disable once clicked
   <div className="container1">
   <div className="add">
    <form action="">
        <div className="display1">
          <input type="text" value={value}/>
        </div>
        <div>
            <input type="button" value= "2"  onClick={handleClick}  />
             <input type="button" value= "+"onClick={handleClick} className="plus"/>
              <input type="button" value= "4" onClick={handleClick}/>
               <input type="button" value="="  onClick={(e=>setValue(eval(value)))}className="equal1"/>
        </div>
        <div>
            <input type="button" value="Clear Value" onClick={()=>setValue("")} className="clear"/>
        </div>
       
       
      

    </form>
    </div>
   </div>
  
    </div>
  );
}
export default Add;
