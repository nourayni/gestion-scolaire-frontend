import React from 'react'
import { Link } from 'react-router-dom'

const Navigationmain = () => {
  return (
    <div>
        <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
            
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-xl lg:flex-grow">
                    <Link to='/espaceadmin' className="block tracking-tight mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4">
                        espace admin
                    </Link>
                    <Link to="/chefdepartement" className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4">
                        chef departement
                    </Link>
                    <Link to="/navigationetudiant" className="block mr-4 mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white">
                        scolarite
                    </Link>
                    <Link to="/espaceprofesseur" className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4">
                        professeur
                    </Link>
                    <Link to="/etudiant" className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white">
                        etudiant
                    </Link>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navigationmain
