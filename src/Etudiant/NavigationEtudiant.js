import React from 'react'
import { Link } from 'react-router-dom'

const NavigationEtudiant = () => {
  return (
    <div className='h-screen gap-4	p-6 mr-6	 fixed w-1/5 	 border-4 rounded-md'>
        <div>
            <h3 className='inline-block border border-blue-500 rounded py-1 px-1 bg-blue-500 text-white'>espace etudiant</h3>
        </div>
    <div className='flex flex-col '>
      <div className='mt-10'>
          <Link to="/etudiant" className=' border-b-2 border-indigo-600 text-blue-500 hover:text-blue-800'>
            consulter note et absence
          </Link>
      </div>
    </div>
</div>
  )
}

export default NavigationEtudiant
