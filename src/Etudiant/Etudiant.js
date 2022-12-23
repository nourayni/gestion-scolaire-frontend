import moment from 'moment';
import React, { useEffect, useState } from 'react'
import axios from '../api/axios';
import NavigationEtudiant from './NavigationEtudiant';

const Etudiant = () => {

    const [etudiant, setEtudiant] = useState();

    const [query,setQuery] = useState('')

    const [etudiants, setEtudiants] = useState([])
   
    
    const handeler = async()=>{
        return await axios.get("/findetudiant");
     };

     useEffect(()=>{
        handeler().then((res)=>setEtudiants(res.data))
        //setLists(res.data)
        //handeler()
     },[])   
     //console.log(lists)
     //etudiants.map(user=> console.log(user))
    
        const [searchValue, setSearchValue] = useState("")

        //whenever search value gets updated, we will update patience list
          useEffect(() => {
            const presentetudiant = etudiants?.filter(value => value.userName.toLowerCase().includes(searchValue.toLowerCase()))
            setEtudiant(presentetudiant);
          }, [searchValue])
          console.log(etudiants)
         
        


  return (
    <div className='grid grid-cols-5 gap-1'>
      <div>
        <NavigationEtudiant />
      </div>
        <div>
            <div className="w-full p-10 pt-8 mb-6 md:mb-0">
                <label className="block w-96 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    rechercher par nom d'utilisateur
                </label>
                <input className="appearance-none block w-96 bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                id="grid-first-name" type="text" placeholder="Jane"
                onChange={(e)=>setSearchValue(e.target.value)}
                value={searchValue}
                /> 
                </div> 

              <div className='flex px-20'>  

            <table className="border-collapse border border-slate-400 mr-10">
            <thead>
                <tr className='bg-cyan-500 '>
                <th className="border border-slate-300  p-2">prenom et nom</th>
                <th className="border border-slate-300  p-2">note controle</th>
                <th className="border border-slate-300  p-2">note examen</th>
                <th className="border border-slate-300  p-2">matiere</th>
                </tr>
            </thead>
            <tbody>
            {
                etudiant?.map((etudiant)=>(
                    <tr>
                        <td className="border border-slate-300 p-2">{etudiant.nom} {etudiant?.prenom}</td>
                        {
                            etudiant?.note?.map((not)=>(
                              <div className='flex flex-row'>
                                <div className='flex flex-col'>
                                    <td className="border border-slate-300 p-2">{ not?.noteControle}</td>
                                </div>
                                <div className='flex flex-col'>
                                    <td className="border border-slate-300 p-2">{not.noteExamen}</td>
                                </div>
                                </div >
                                    
                                
                                
                            ))
                        }
                        {
                            etudiant?.absences?.map((absen)=>(
                                
                                <td className="border border-slate-300 p-2">{absen?.matiere?.nom}</td>
                                
                            ))
                        }
                    </tr>
                ))
            }
            </tbody>
        </table>


        <table className="border-collapse border border-slate-400 ...">
            <thead>
                <tr className='bg-cyan-500 p-2'>
                <th className="border border-slate-300 p-2">nom d'utilisateur</th>
                <th className="border border-slate-300 p-2">prenom et nom</th>
                <th className="border border-slate-300 p-2">matiere </th>
                <th className="border border-slate-300 p-2">date d'absence</th>
                </tr>
            </thead>
            <tbody>

            {
                etudiant?.map((etudiant)=>(
                    <tr>
                        <>
                        <td className="border border-slate-300 p-2">{etudiant.userName} </td>
                        <td className="border border-slate-300 p-2">{etudiant.nom} {etudiant.prenom}</td>
                        </>
                       
                        {
                            etudiant?.absences?.map((absen)=>(
                                <>
                                <td className="border border-slate-300 p-2">{absen?.matiere?.nom}</td>
                                <td className="border border-slate-300 p-2">{moment(absen?.dateAbsence).format('DD-MM-YYYY') }</td>
                                </>
                            ))
                        }
                    </tr>
                ))
            }

            </tbody>
            </table>
        
        

                </div>
          </div>        
    </div>
  )
}

export default Etudiant
