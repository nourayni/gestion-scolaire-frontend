

import React, { useEffect, useRef, useState } from 'react'
import useAuth from '../hooks/useAuth';
import { Link, Navigate, useLocation } from 'react-router-dom'
import axios from '../api/axios';
import AuthContext from '../context/AuthProvider';
import univ from '../static/ucad.jpg'


const LoginPage = () => {
  const {setAuth}=useAuth();
  const userRef=useRef();
  const errRef=useRef();
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false)

  const location = useLocation();

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [username,password])
  
  const hundleSubmit=async(e)=>{
    e.preventDefault();
    try {
      const response = await axios.post('/login',{
        username,
        password
      },
      {
        headers:{'Content-Type':'application/json'},
    
    }
  );
  console.log(response.data)
  console.log(response)
  setUserName('')
  setPassword('');

    const accessToken = response.data.accessToken

    const role = response.data.role

    console.log(accessToken,role,username)

  setAuth({
    username,
    password,
    accessToken,
    role
  })
  const auth = setAuth();
   console.log(auth.username)

    } catch (error) {
      console.log(error)
    }
  }
  


  return (
    <div className="w-full h-screen flex justify-center bg-fixed bg-no-repeat bg-cover" 
    style={{backgroundImage:`url(${univ})`}}
    >
  <form onSubmit={hundleSubmit} className=" mt-16 bg-gray-600 shadow-md rounded-xl px-36 pt-6 w-3/6 mb-4" >
    <div className='mb-8'>
      <p className='text-md font-bold flex justify-center text-blue-500'>bienvenue dans l'universite</p>
      <p className='text-md font-bold flex justify-center text-blue-500'>entrer ton nom d'utilisateur </p>
      <p className='text-md font-bold flex justify-center text-blue-500'>et ton mot de passe</p>

    </div>
    <div className="mb-4">
        <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="username">
          nom d'utilisateur
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username" type="text"
        
        value={username}
        onChange={(e)=>{setUserName(e.target.value)
          console.log(e.target.value)
        }}
        required
        aria-describedby='username'
        ref={userRef}
        />
    </div>
    <div className="mb-6">
        <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="password">
          mot de passe
        </label>
        <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password"
        type="password"  
        value={password}
        onChange={(e)=>{
        setPassword(e.target.value)
        }
        }
        required
        aria-describedby='username'
        ref={userRef}
        />
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        connecter
      </button>
      <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" path="#" >
        mot de passe oublie
      </Link>
    </div>
  </form>
</div>
  )
}

export default LoginPage