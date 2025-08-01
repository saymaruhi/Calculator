import { useState } from "react"
function Calculator(){
    const [value,setValue]= useState("")
    return(
        <div>
<div className="container">
      <div className='calculator'>
        <form action="">
<div className='display'>
        <input type='text' value={value}/>
       </div>

       <div>
       <input type='button' value="AC" onClick={(e=>setValue(""))} />
       <input type='button' value="DEL"onClick={(e=>setValue(value .slice(0, -1)))} />
       <input type='button' value="." onClick={(e=>setValue(value + e.target.value))} />
       <input type='button' value="/" onClick={(e=>setValue(value + e.target.value))} />
       </div>

       <div>
       <input type='button' value="7" onClick={(e=>setValue(value + e.target.value))} />
       <input type='button' value="8" onClick={(e=>setValue(value + e.target.value))} />
       <input type='button' value="9" onClick={(e=>setValue(value + e.target.value))}/>
       <input type='button' value="*" onClick={(e=>setValue(value + e.target.value))} />
       </div>

       <div>
       <input type='button' value="4" onClick={(e=>setValue(value + e.target.value))} />
       <input type='button' value="5" onClick={(e=>setValue(value + e.target.value))} />
       <input type='button' value="6" onClick={(e=>setValue(value + e.target.value))}/>
       <input type='button' value="+" onClick={(e=>setValue(value + e.target.value))} />
       </div>

       <div>
       <input type='button' value="1" onClick={(e=>setValue(value + e.target.value))}/>
       <input type='button' value="2" onClick={(e=>setValue(value + e.target.value))}/>
       <input type='button' value="3" onClick={(e=>setValue(value + e.target.value))} />
       <input type='button' value="-" onClick={(e=>setValue(value + e.target.value))} />
       </div>

       <div>
       <input type='button' value="00" onClick={(e=>setValue(value + e.target.value))} />
       <input type='button' value="0" onClick={(e=>setValue(value + e.target.value))}/>
       <input type='button' value="=" onClick={(e=>setValue(eval(value)))} className='equal'/>
      
       </div>

        </form>
       
       </div>
      </div>
      <p>In the Calculator we use <b style= {{color: "blue"}}> slice</b> for delete 1 charc from last eg: .slice(0,-1)</p>
      <p>For the = sign we use <b style= {{color: "blue"}}>(eval()) </b>
        In React it works inside event handler or logic. It also works in JS but in different way. I have to look.
      </p>
        </div>
    )
}
export default Calculator