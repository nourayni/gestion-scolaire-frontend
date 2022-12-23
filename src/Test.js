import React, { useEffect, useState } from 'react'

import axios from 'axios'

const Test = () => {
    const [users,setUsers] = useState([]);

    const handeler = async()=>{
        return await axios.get("http://localhost:8080/users");
     };

     useEffect(()=>{
        handeler().then((res)=>setUsers(res.data))
        //setLists(res.data)
        //handeler()
     },[])   
     //console.log(lists)
     users.map(user=> console.log(user))

  return (
    <>
    <div>
      {
        users.map((user)=>(
            <ul key={user.userName}>
                <li>{user.nom}</li>
            </ul>
        ))
      }
    </div>

      

    </>
  )
}

export default Test
