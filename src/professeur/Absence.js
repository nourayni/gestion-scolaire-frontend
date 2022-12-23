import React, { useEffect, useState } from 'react'
import NavigationProf from './NavigationProf'
import univ from '../static/ucad.jpg'
import axios from '../api/axios'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const Absence = () => {


    const [dateAbsence, setDateAbsence] = useState();

    const [etudiant, setEtudiant] = useState({});

    const [matiere, setMatiere] = useState({});

    const [etudiants, setEtudiants] = useState([]);
    const [matieres, setMatieres] = useState([])

    const etudiantRef = useRef();
    const matiereRef = useRef()

    const handeler = async()=>{
        return await axios.get("/findetudiant");
     };

     useEffect(()=>{
        handeler().then((res)=>setEtudiants(res.data))
        //setLists(res.data)
        //handeler()
     },[])   
     //console.log(lists)
    // etudiants.map(user=> console.log(user))

    const handelerr = async()=>{
        return await axios.get("/allMatiere");
     };

     useEffect(()=>{
        handelerr().then((res)=>setMatieres(res.data))
        //setLists(res.data)
        //handeler()
     },[])   
     //console.log(lists)
    // matieres.map(mat=> console.log(mat))



    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const response = await axios.post("/addabsence",{
                dateAbsence,
                etudiant:{
                    userName:etudiantRef.current.value
                },
                matiere:{
                    idMatiere:matiereRef.current.value
                }
            },
            {
                headers:{'Content-Type':'application/json;charset=utf-8'},
            }
            );
            console.log(response.data)
            console.log(response)
        } catch (error) {
            console.log(error.response.data)
        }
    }



  return (
    <div className='grid grid-cols-5 gap-1 '>
        <div>
            <NavigationProf />
        </div>
        
        <div className='bg-fixed h-screen w-full bg-no-repeat bg-cover pb-4 col-span-4 h-full w-full grid	p-28 pt-8 h-scren border-4 rounded-md' 
        style={{backgroundImage:`url(${univ})`}}
        >
            <div className='flex justify-center mb-8 inline-block border border-blue-500 rounded py-1 px-1 bg-blue-500 text-white'>
                <Link to='#'>marquer absence un etudiant</Link>
            </div>
            <form className="w-full bg-gray-900  pl-20 pr-20 pb-16 pt-16 opacity-75 " onSubmit={handleSubmit}>
            
            <div className="flex flex-col flex-wrap -mx-3 mb-6">
                <div className="w-full  px-3 mb-6 ">
                    <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" htmlFor="grid-state">
                        etudiant
                    </label>
                    <div className="relative">
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        id="grid-state"
                        onChange={(e)=>{
                            setEtudiant(e.target.value)
                            console.log(e.target.value)
                        }}
                        ref={etudiantRef}
                        >
                            {
                                etudiants.map((options)=>(
                                    <option key={options.userName} value={options.userName}>
                                        {options.preonm} {options.nom}
                                    </option>
                                ))
                            }
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                     </div>
                </div>
                <div className="w-full px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" htmlFor="grid-state">
                        matiere
                    </label>
                    <div className="relative">
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        id="grid-state"
                        onChange={(e)=>{
                            setMatiere(e.target.value)
                            console.log(e.target.value)
                        }}
                        ref={matiereRef}
                        >
                        {
                                matieres.map((options)=>(
                                    <option key={options.idMatiere} value={options.idMatiere}>
                                         {options.nom}
                                    </option>
                                ))
                        }
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                     </div>
                </div>
            </div>

            <div className="flex flex-wrap  -mx-3 mb-6">
                <div className="w-full px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        date Absence
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                    id="grid-first-name" type="date" placeholder="Jane"
                    onChange={(e)=>setDateAbsence(e.target.value)}
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

export default Absence
