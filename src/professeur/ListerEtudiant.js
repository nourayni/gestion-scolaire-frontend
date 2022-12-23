import React from 'react'
import { Link } from 'react-router-dom'
import Licence1 from '../cohorte/Licence1'
import NavigationEtudiant from '../scolarite/NavigationEtudiant'
import NavigationProf from './NavigationProf'

const ListerEtudiant = () => {
  return (
    <div className='grid grid-cols-5 gap-1 '>
        <div>
            <NavigationEtudiant />
        </div>
        

        <div >
            <div className=''>
                <div className='flex w-screen gap-4	p-2 pb-4 mt-8 mr-6 h-12 bg-blue-100 flex-row'>
                    <div className='ml-10'>
                        <Link to="/licence1" className='border-b-2 text-blue-500 hover:text-blue-800'>
                        licence 1
                        </Link>
                    </div>
                    <div className=' ml-10'>
                        <Link to="#" className='border-b-2 text-blue-500 hover:text-blue-800'>
                        licence 2
                        </Link>
                    </div>
                    <div className=' ml-10'>
                        <Link to="#" className='border-b-2 text-blue-500 hover:text-blue-800'>
                        licence 3
                        </Link>
                    </div>
                    <div className=' ml-10'>
                        <Link to="#" className='border-b-2 text-blue-500 hover:text-blue-800'>
                        master 1
                        </Link>
                    </div>
                    <div className=' ml-10'>
                        <Link to="#" className='border-b-2 text-blue-500 hover:text-blue-800'>
                        master 2
                        </Link>
                    </div>
                </div>
            </div>

            <div>
                
            </div>
        </div>

       
        
    </div>

  )
}

export default ListerEtudiant