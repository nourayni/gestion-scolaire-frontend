import React from 'react'

import bgucad from '../static/ucad.jpg'
const Login = () => {
  return (
    <div className='bg-fixed bg-no-repeat bg-cover' style={{
        backgroundImage:`url(${bgucad})`
        
        }}>
        <form className='pt-40 ml-72 h-screen  mr-72 items-center' >
            <div className=' grid grid-cols gap-5 opacity-90 h-72 pt-11 rounded-md justify-center' style={{backgroundColor:"ButtonHighlight"}} >
                <label>
                    <p>nom d'utilisateur:</p>
                    <input className='w-72 outline-none rounded-md' type="text"/>
                </label>
                <label>
                    <p>mot de passe:</p>  
                    <input className='w-72 outline-none rounded-md' type="text"/>
                </label>
                <div>
                    <button className='bg-lime-300 hover:bg-lime-600 rounded-md py-3 px-3'>connecter</button>
                </div>
            </div>  
        </form>
    </div>
  )
}

export default Login

