import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider}from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import WriteBlog from './components/WriteBlog';
import Contact from './components/Contact';
import { useState, useEffect } from 'react';
import { LogContext } from './components/LogContext';
import UserBlogs from './components/UserBlogs';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase-config';

function App() {
  const [isLogged, setIsLogged] = useState('');
  const [posts, setPosts] = useState([]);
  const [update, setUpdate] = useState(0);
  const postsRef = collection(db, "Blogs");

  useEffect(()=>{
    const getData = async () =>{
      const data = await getDocs(postsRef);
      let docsData = data.docs.map(doc => ({...doc.data(), id: doc.id}));
      setPosts(docsData);
    }
    getData();
    console.log('Hello');
  }, [update]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
         <Route index element={<Home posts={posts}/>}/>
         <Route exact path='/login' element={<Login/>}/>
         <Route exact path='/writeblog' element={<WriteBlog setUpdate={setUpdate}/>}/>
         <Route exact path='/contact' element={<Contact/>}/>
         <Route exact path='/userblogs' element={<UserBlogs posts={posts} setUpdate={setUpdate}/>}/>
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
