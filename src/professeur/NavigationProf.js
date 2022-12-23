import React from 'react'
import { Link } from 'react-router-dom'

const NavigationProf = () => {
  return (
    <div className='h-screen gap-4	p-6 mr-6	 fixed w-1/5 	 border-4 rounded-md'>
      <div>
        <h3 className='inline-block border border-blue-500 rounded py-1 px-1 bg-blue-500 text-white'>ESPACE PROFSSEUR</h3>
      </div>
      <div className='flex flex-col'>
          <div className='mt-10'>
              <Link to="/marqueabsence" className=' text-blue-500 hover:text-blue-800'>marquer Absence</Link>
          </div>
          <div className='mt-10'>
              <Link to="/ajouternote" className=' text-blue-500 hover:text-blue-800'>attribuer note</Link>
          </div>
          <div className='mt-10'>
              <Link to="/parametreProf" className=' text-blue-500 hover:text-blue-800'>mon compte</Link>
          </div>
      </div>
    </div>
  )
}

export default NavigationProf
