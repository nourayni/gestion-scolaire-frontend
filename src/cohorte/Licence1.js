import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../api/axios';
import NavigationEtudiant from '../scolarite/NavigationEtudiant';

const Licence1 = () => {

    const [cohortes,setCohorte] = useState([]);

    const handeler = async()=>{
        return await axios.get("/getcohorte");
     };

     useEffect(()=>{
        handeler().then((res)=>setCohorte(res.data))
        //setLists(res.data)
        //handeler()
     },[])   
     //console.log(lists)
     cohortes.map(user=> console.log(user))

  return (
    <div className='grid grid-cols-5 gap-1'>
        <div>
            <NavigationEtudiant />
        </div>
        <div className='mb-20'>
            
                <div className='flex mb-20 w-screen gap-4	p-2 pb-4 mt-8 mr-6 h-12 bg-blue-100 flex-row'>
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
        <div className='flex flex-row mt-32 '>
        {
            cohortes.map((cohorte)=>(
                <div className='mr-10 bg-cyan-800 flex justify-center border-sky-200 border-2 h-30 p-4 w-96'>
                    <Link className=''  to={`cohorte/${cohorte.idCohorte}`} >{cohorte.nomCohorte}</Link>
                </div>

            ))
        }
    </div>
    </div>
  )
}

export default Licence1