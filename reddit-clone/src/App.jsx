import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link, createBrowserRouter, createRoutesFromElements  } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import LogIn from '../Components/LogIn';
import SignUp from '../Components/SignUP';
import Home from '../Components/Home';
import Accounts from '../Components/Accounts';
function App() {
  const reactrouter=createBrowserRouter(createRoutesFromElements
    (
      <Route>
        <Route path='/'element={<Home/>}/>
        <Route path='/LogIn'element={<LogIn/>}/>
        <Route path='/SignUp'element={<SignUp/>}/>
      </Route>
    ))
  

  
  

  return (
    
    <Accounts/>
          
  )
}

export default App
