import { useState } from 'react'
import { Route, Routes, NavLink } from 'react-router'
import './App.css'
import Add from './add'
import Calculator from './calculator'

function App(){

 

  return(
    <div>
    
    <ul>
      <li className='nav-link'>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/add"}>Add</NavLink>
      </li>
    </ul>
      
      <Routes>
        <Route path= "/" element= {<Calculator />}/>
        <Route path= "/add" element= {<Add />}/>  
      </Routes>


    </div>
  )
}
export default App