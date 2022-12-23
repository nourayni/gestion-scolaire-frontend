import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NavigationProf from './NavigationProf'

import univ from '../static/ucad.jpg'
import axios from '../api/axios'
import { useRef } from 'react'

const Note = () => {

    const [noteControle, setNoteControle] = useState()

    const [noteExamen, setNoteExamen] = useState();

    const [etudiant, setEtudiant] = useState({});

    const [matiere, setMatiere] = useState({});

    const [etudiants, setEtudiants] = useState([]);
    const [matieres, setMatieres] = useState([])

    const examenRef = useRef()
    const etudiantRef = useRef();
    const matiereRef = useRef()
    const controleRef = useRef();


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
            const response = await axios.post("/addnote",{
                noteControle,
                noteExamen,
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
            <div className='flex justify-center mb-8  inline-block border border-blue-500 rounded py-1 px-1 bg-blue-500 text-white'>
                <Link to='#'>ajouter note aux etudiant</Link>
            </div>
            <form className="w-full w-full bg-gray-900 opacity-75 pt-20 pb-20 p-2" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-12">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        note controle
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                    id="grid-first-name" type="text" placeholder="Jane"
                    onChange={(e)=>setNoteControle(e.target.value)}
                    ref={controleRef}
                    required/>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" htmlFor="grid-last-name">
                        note D'examen
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-last-name" type="text" placeholder="Doe"
                    onChange={(e)=>setNoteExamen(e.target.value)}
                    required
                    ref={examenRef}
                    />
                </div>
            </div>
            
            
            <div className="flex flex-wrap -mx-3 mb-10">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
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
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
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
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Button
        </button>
        
        </form>
        </div>
        

    </div>
  )
}

export default Note
