import { useState } from 'react'
import { Route, Routes, NavLink } from 'react-router'
import './App.css'
import Add from './add'
import Calculator from './calculator'
import Clock from './clock'
import ShowDate from './date'

function App(){

 

  return(
    <div>
    <h4>Main Page or App.jsx</h4>
    <p>In this project I use Routes for 2 pages</p>
    
    <ul>
      <li className='nav-link'>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/add"}>Add</NavLink>
        <NavLink to={"/clock"}>Clock</NavLink>
      </li>
    </ul>
      
      <Routes>
        <Route path= "/" element= {<Calculator />}/>
        <Route path= "/add" element= {<Add />}/>  
        <Route path= "/clock" element= {<Clock />}/>  
      </Routes>
<ShowDate />

    </div>
  )
}
export default App