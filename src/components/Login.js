import React from 'react'
import { auth, provider } from '../firebase-config'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { LogContext } from './LogContext'

export default function Login() {
  const [isLogged, setIsLogged] = useContext(LogContext)
  let navigate = useNavigate();

  const signUserIn = () =>{
      signInWithPopup(auth, provider).then((result) => {
         setIsLogged(true);
         navigate('/');
      })
  }
  return (
    <>
    <div className='mt-16 text-center'>
      <h4 className='text-2xl'>Sign in with google to continue</h4>
      <button onClick={signUserIn} className='mt-10 text-lg bg-indigo-500 px-6 py-2  text-white rounded'>Sign in with Google</button>
    </div>
    </>
  )
}
