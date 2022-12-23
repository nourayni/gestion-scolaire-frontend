import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from '../api/axios';
import Navigation from './Navigation';

const ProfesseurLists = () => {
    const [users,setUsers] = useState([]);

    const handeler = async()=>{
        return await axios.get("/findprof");
     };

     useEffect(()=>{
        handeler().then((res)=>setUsers(res.data))
        //setLists(res.data)
        //handeler()
     },[])   
     //console.log(lists)
     users.map(user=> console.log(user))
  return (
    <div className='grid grid-cols-5 gap-1'>
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
                <th className="border border-slate-300 p-2">voir plus</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user)=>(
                            <tr>
                                <td className="border border-slate-300 p-2">{user.userName}</td>
                                <td className="border border-slate-300 p-2">{user.nom}</td>
                                <td className="border border-slate-300 p-2">{user.grade}</td>
                                <Link to={`/prof/${user.userName}`}>
                                    <td className="border border-slate-300 ...">voir plus...</td>
                                </Link>
                            </tr>
                    ))
                }
            </tbody>
            </table>
        </div>

    </div>
  )
}

export default ProfesseurLists