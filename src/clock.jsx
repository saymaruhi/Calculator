import { useState } from "react";
import ShowDate from "./date";


const Clock = () => {
  const curTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(curTime);

  const update =()=>{
    const curTime = new Date().toLocaleTimeString();
    setTime(curTime)
  }

  setInterval(()=>{
update()
  },1000)
  return (
    <div>
         <p>For Digital Clock we use some method.<br/> 
            1.const curTime <br/>
            2.setInterval()
         </p>
      <div className="container">
       
        <div className="clock">
          <h2>Digital Clock</h2>

 <div>
          <h2>{time}</h2>
          <ShowDate />
        </div>
        </div>

        
       
      </div>
    </div>
  );
};
export default Clock

         
