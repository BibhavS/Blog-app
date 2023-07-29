import React from 'react'
import { auth, provider } from '../firebase-config'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { LogContext } from './LogContext'
import { FcGoogle} from 'react-icons/fc'

export default function Login() {
  const [, setIsLogged] = useContext(LogContext)
  let navigate = useNavigate();
 
  const signUserIn = () =>{
      signInWithPopup(auth, provider).then((result) => {
         setIsLogged(true);
         navigate('/');
      })
  }
  return (
    <>
    <div className='mt-20 text-center'>
      <h4 className='text-4xl font-medium'>Sign in with google to continue</h4>
      <button onClick={signUserIn} className='mt-16 text-xl  font-medium shadow-xl px-8 py-3 rounded'>
         <div className='flex items-center'>
          <FcGoogle size={25}/>
          <span className='ml-4'>Sign in with Google</span>
         </div>
      </button>
    </div>
    </>
  )
}
