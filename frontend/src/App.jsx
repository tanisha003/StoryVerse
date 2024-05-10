import React from 'react'
import Home from '../home/Home'
import {Navigate, Route,Routes} from 'react-router-dom'
import Bestsellers from '../components/Bestsellers'
import Signup from '../components/Signup'
import { Toaster } from 'react-hot-toast'
import { useAuth } from './context/AuthProvider'


function App() {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);
  return (
    <>
    {/*<Home/>
    <Bestsellers/>*/}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Bestsellers" element={authUser?<Bestsellers/>:<Navigate to="/signup"/>} />
      <Route path="/Signup" element={<Signup/>}/>
      </Routes>
      <Toaster />
    </>
 )
}

export default App