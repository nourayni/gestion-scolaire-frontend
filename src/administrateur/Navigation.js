import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className=' h-screen gap-4	p-6 mr-6	 fixed w-1/5 	 border-4 rounded-md'>
      <div>
        <h3 className='inline-block border border-blue-500 rounded py-1 px-1 bg-blue-500 text-white'>ESPACE ADMINISTRATEUR</h3>
      </div>
    <div className='flex flex-col'>
        <div className='mt-10'>
            <Link to="/ajouteprofesseur" className=' border-b-2 border-indigo-600 text-blue-500 hover:text-blue-800'>
              ajouter professeur
            </Link>
        </div>
        <div className='mt-10'>
            <Link to="/ajouterole" className=' border-b-2 border-indigo-600 text-blue-500 hover:text-blue-800'>
              attribuer Role
            </Link>
        </div>
        <div className='mt-10'>
            <Link to="/parametreAdmin" className=' border-b-2 border-indigo-600 text-blue-500 hover:text-blue-800'>
              mon compte
            </Link>
        </div>
        <div className='mt-10'>
            <Link to="/ajouterdepartement" className=' border-b-2 border-indigo-600 text-blue-500 hover:text-blue-800'>
              ajout departement
            </Link>
        </div>
         <div className='mt-10'>
            <Link to="/ajouterscolarite" className=' border-b-2 border-indigo-600 text-blue-500 hover:text-blue-800'>
              scolarite
            </Link>
        </div>
    </div>
  </div>
  )
}

export default Navigation
