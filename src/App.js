import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider}from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import WriteBlog from './components/WriteBlog';
import Contact from './components/Contact';
import { useState } from 'react';
import { LogContext } from './components/LogContext';

function App() {
  const [isLogged, setIsLogged] = useState('');

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
         <Route index element={<Home/>}/>
         <Route exact path='/login' element={<Login/>}/>
         <Route exact path='/writeblog' element={<WriteBlog/>}/>
         <Route exact path='/contact' element={<Contact/>}/>
      </Route>
    )
  )
  return (
    <>
    <LogContext.Provider value = {[isLogged, setIsLogged]}>
     <RouterProvider router={router}/>
    </LogContext.Provider>
    </>
  );
}

const Root = ()=>{
  return (
    <>
      <Navbar/>
      <div>
        <Outlet/>
      </div>
    </>
  )
}

export default App;
