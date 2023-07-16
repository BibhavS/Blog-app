import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider}from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import WriteBlog from './components/WriteBlog';
import Contact from './components/Contact';

function App() {

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
    <RouterProvider router={router}/>
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
