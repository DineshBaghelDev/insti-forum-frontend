import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link, createBrowserRouter, createRoutesFromElements  } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import LogIn from './components/LogIn';
import SignUp from './components/SignUP';
import Home from './components/Home';
import Accounts from './components/Accounts';
import CommunitiesPage from './components/CommunitiesPage';
import { ForumProvider } from './components/context';
import Post from './components/Post';
import CreatePost from './components/CreatePost';
function App() {
  const [checkCommunities,SetCommunities]=useState(true)
  const[isOpenCC,setOpenCC]=useState(false)
  const[isOpenCP,setOpenCP]=useState(false)
  const setAllCom= ()=>
    {
        SetCommunities(true)
    }
  const setJoinedCom= ()=>
    {
        SetCommunities(false)
    }
    const OpenCC= ()=>
    {
        setOpenCC(true)
    }
  const CloseCC= ()=>
    {
        setOpenCC(false)
    }
    const OpenCP= ()=>
    {
        setOpenCP(true)
    }
  const CloseCP= ()=>
    {
        setOpenCP(false)
    }
  

  return (

    <ForumProvider value={{checkCommunities,setAllCom,setJoinedCom,isOpenCC,OpenCC,CloseCC,isOpenCP,OpenCP,CloseCP}}>
      <CommunitiesPage/>

    </ForumProvider>
    
          
  )
}

export default App
