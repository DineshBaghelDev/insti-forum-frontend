import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link, createBrowserRouter, createRoutesFromElements  } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import LogIn from '../Components/LogIn';
import SignUp from '../Components/SignUP';
import Home from '../Components/Home';
import Accounts from '../Components/Accounts';
import CommunitiesPage from '../Components/CommunitiesPage';
import { ForumProvider } from '../Components/context';
import Post from '../Components/Post';
import CreatePost from '../Components/CreatePost';
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
