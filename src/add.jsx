import { useState } from "react";

function Add() {
const[value,setValue]= useState("")
const clearValue =()=>{
setValue("")

}
  return (
   <div>
   <div className="container1">
   <div className="add">
    <form action="">
        <div className="display1">
          <input type="text" value={value}/>
        </div>
        <div>
            <input type="button" value= "2" onClick={(e=>setValue(value + e.target.value))}  />
             <input type="button" value= "+"onClick={(e=>setValue(value + e.target.value))} className="plus"/>
              <input type="button" value= "4" onClick={(e=>setValue( value + e.target.value))}/>
               <input type="button" value="="  onClick={(e=>setValue(eval(value)))}className="equal1"/>
        </div>
        <div>
            <input type="button" value="Clear Value" onClick={clearValue} className="clear"/>
        </div>
       
       
      

    </form>
    </div>

   </div>
    </div>
  );
}
export default Add;
