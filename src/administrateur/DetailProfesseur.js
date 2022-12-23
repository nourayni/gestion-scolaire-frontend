import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Navigation from './Navigation'

const DetailProfesseur = () => {
    const id = useParams().id

    const [prof , setProf] = useState({});

    const handeler = async()=>{
        return await axios.get(`http://localhost:8080/user/${id}`);
     };

     useEffect(()=>{
        handeler().then((res)=>setProf(res.data))
        //setLists(res.data)
        //handeler()
     },[id])
     console.log(prof)
  return (
    <div className='grid grid-cols-5 gap-1 '>
        <div>
          <Navigation />
        </div>
        
        <div className='bg-fixed h-full bg-no-repeat bg-cover pb-4 col-span-4 h-full w-full grid p-2 pt-8 h-scren border-4 rounded-md'>

    <table class="border-separate border-spacing-2 border border-slate-400 ...">
    <thead>
        <tr>
        <th className="border border-slate-300 p-2">nom d'utilisateur professeur</th>
        <th className="border border-slate-300 p-2">nom</th>
        <th className="border border-slate-300 p-2">grade</th>
        <th className="border border-slate-300 p-2">matricule</th>
        <th className="border border-slate-300 p-2">numero telephone</th>
        <th className="border border-slate-300 p-2">specialite</th>
        </tr>
    </thead>
    <tbody>
    {
        
                <tr>
                    <td className="border border-slate-300 p-2">{prof.userName}</td>
                    <td className="border border-slate-300 p-2">{prof.nom}</td>
                    <td className="border border-slate-300 p-2">{prof.grade}</td>
                    <td className="border border-slate-300 p-2">{prof.matricule}</td>
                    <td className="border border-slate-300 p-2">{prof.numtelephone}</td>
                    <td className="border border-slate-300 p-2">{prof.specialite}</td>
                </tr>
        
    }
</tbody>
</table>
</div>

    </div>
  )
}

export default DetailProfesseur