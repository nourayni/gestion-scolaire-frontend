import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from '../api/axios';
import NavigationProf from '../professeur/NavigationProf'
import univ from '../static/ucad.jpg'
import NavigationChefDepart from './NavigationChefDepart';


const Matiere = () => {

    const [coef, setCoef] = useState();

    const [credit, setCredit] = useState();

    const [nom, setNom] = useState('');


    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const response = await axios.post("/addmatiere",JSON.stringify({
                coef,
                credit,
                nom,
            }),
            {
                headers:{'Content-Type':'application/json;charset=utf-8'},
            }
            );
            console.log(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    

  return (
    <div className='grid grid-cols-5 gap-1'>
        <div>
            <NavigationChefDepart />
        </div>

        <div className='bg-fixed h-screen w-full bg-no-repeat bg-cover pb-4 col-span-4 h-full w-full grid	p-28 pt-8 h-scren border-4 rounded-md' 
        style={{backgroundImage:`url(${univ})`}}
        >
            <div className='flex justify-center mb-8 inline-block border border-blue-500 rounded py-1 px-1 bg-blue-500 text-white'>
                <Link to='#'>ajouter une nouvelle matiere</Link>
            </div>
            <form className="w-full bg-gray-900  pl-20 pr-20 pb-16 pt-16 opacity-75 " onSubmit={handleSubmit}>
            
            <div className="flex flex-col flex-wrap -mx-3 mb-6">
              
                <div className="w-full px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        coef
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                    id="grid-first-name" type="text" placeholder="Jane"
                    onChange={(e)=>setCoef(e.target.value)}
                    required/>
                </div>

                <div className="w-full px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        credit
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                    id="grid-first-name" type="text" placeholder="Jane"
                    onChange={(e)=>setCredit(e.target.value)}
                    required/>
                </div>   
            </div>

            <div className="flex flex-wrap  -mx-3 mb-6">
                <div className="w-full px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        nom
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                    id="grid-first-name" type="text" placeholder="Jane"
                    onChange={(e)=>setNom(e.target.value)}
                    required/>
                </div>
            </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Button
        </button>
        
        </form>
        </div>

    </div>
  )
}

export default Matiere