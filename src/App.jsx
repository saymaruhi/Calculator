import { useState } from 'react'
import { Route, Routes, NavLink } from 'react-router'
import './App.css'
import Add from './add'
import Calculator from './calculator'

function App(){

 

  return(
    <div>
    <h4>Main Page or App.jsx</h4>
    <p>In this project I use Routes for 2 pages</p>
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