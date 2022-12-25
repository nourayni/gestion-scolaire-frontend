import axios from 'axios'
import moment from 'moment/moment'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const DetailEtudiant = () => {
    const id = useParams().id

    const [cohorte, setCohorte] = useState({})

    const handeler = async()=>{
        return await axios.get(`http://localhost:8080/cohortebyid/${id}`);
     };

     useEffect(()=>{
        handeler().then((res)=>setCohorte(res.data))
        //setLists(res.data)
        //handeler()
     },[id])
     console.log(cohorte?.etudiants?.map(cohorte => cohorte) )


     const [cohortes,setCohortes] = useState([]);

    const handelerr = async()=>{
        return await axios.get("/getcohorte");
     };

     useEffect(()=>{
        handelerr().then((res)=>setCohortes(res.data))
        //setLists(res.data)
        //handeler()
     },[])   
     //console.log(lists)
     cohortes.map(user=> console.log(user))
  return (
    <div >

<div className='mb-20 px-10'>
            
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
        

    </div >
    <div className='flex flex-row mt-12 px-10 '>
    {
        cohortes.map((cohorte)=>(
            <div className='mr-10 bg-cyan-800 flex justify-center border-sky-200 border-2 h-30 p-4 w-96'>
                <Link className=''  to={`cohorte/${cohorte.idCohorte}`} >{cohorte.nomCohorte}</Link>
            </div>

        ))
    }
</div>

        <div className='flex justify-center bg-cyan-500 mt-8 ml-96 mr-96'>
           <h1>information {cohorte.nomCohorte} licence 1 </h1>
        </div>
      <div className='flex flex-row justify-center m-10'>
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
                cohorte?.etudiants?.map((etudiant)=>(
                    <tr>
                        <td className="border border-slate-300 p-2">{etudiant.nom}</td>
                        {
                            etudiant?.note?.map((not)=>(
                                <>
                                    <td className="border border-slate-300 p-2">{ not?.noteControle}</td>
                                    <td className="border border-slate-300 p-2">{not.noteExamen}</td>
                                    <td className="border border-slate-300 p-2">{not.matiere.nom}</td>
                                </>
                                
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
                cohorte?.etudiants?.map((etudiant)=>(
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
  )
}
export default DetailEtudiant


                               
