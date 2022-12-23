import React, { useEffect, useRef, useState } from 'react'
import axios from '../api/axios';
import NavigationEtudiant from './NavigationEtudiant';
import univ from '../static/university.jpg';
import { Link } from 'react-router-dom';

const EtudiantRegistration = () => {
    const userRef= useRef();
    const errRef=useRef();
    const cohorteRef=useRef();

    const [userName ,setUserName]=useState('');
    const [validUsername,setValidUsername]=useState(false)
    const [usernameFocus,setUsernameFocus]=useState(false)

    const [nom,setNom]=useState('');
    const [validNom,setValidNom]=useState(false)
    const [nomFocus,setNomFocus]=useState(false)

    const [prenom,setPrenom]= useState('');
    const [validPrenom,setValidPrenom]=useState(false)
    const [prenomFocus,setPrenomFocus]=useState(false)

    const [dateDeNaissance,setDateDeNaissance]=useState();
    const [dateDeNaissanceFocus,setDateDeNaissanceFocus]=useState(false)

    

    const [lieuDeNaissance,setLieuDeNaissance] = useState('');
    const [lieuDeNaissanceFocus,setLieuDeNaissanceFocus]=useState(false)

    const [numtelephone,setNumtelephone]=useState('');
    const [numtelephoneFocus,setNumtelephoneFocus]= useState(false);

    const [password,setPassword]=useState('');
    const [validPassword,setValidPassword]=useState(false)
    const [passwordFocus,setPasswordFocus]=useState(false)

    const [matchPassword, setMatchPassword]= useState('');
    const [validMatchPassword ,setValidMatchPassword] = useState(false);
    const [matchPasswordFocus, setMatchPasswordFocus]=useState(false);

    const [profession,setProfession] = useState('');
    const [professionFocus,setProfessionFocus]= useState(false);

    const [numeroCarte, setNumeroCarte] = useState('');
    const [numeroCarteFocus, setNumeroCarteFocus] = useState(false);

    const [filiere, setFiliere] = useState('');
    const [filiereFocus, setFiliereFocus] = useState(false);

    const [anneeUniversitaire, setAnneeUniversitaire] = useState();
    const [anneeUniversitaireFocus, setanneeUniversitaireFocus] = useState(false);

    const [niveau, setNiveau] = useState('');
    const [niveauFocus, setNiveauFocus] = useState(false)

    const [cohorte, setCohorte] = useState()
    const [cohorteFocuce, setCohorteFocuce] = useState(false)

    const [cohortes,setCohortes] = useState([]);

    const handeler = async()=>{
        return await axios.get("/getcohorte");
     };

     useEffect(()=>{
        handeler().then((res)=>setCohortes(res.data))
        //setLists(res.data)
        //handeler()
     },[])   
     //console.log(lists)
     //cohortes.map(user=> console.log(user))

    const [errMsg,setErrMsg]=useState('');
    const [success,setSuccess]=useState(false);


    const usernameRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

    useEffect(()=>{
        userRef.current.focus();
    },[]);

    useEffect(()=>{
        const result = usernameRegex.test(userName);
        console.log(result);
        console.log(userName);
        setValidUsername(result);
    },[userName]);

    useEffect(()=>{
        const result = passwordRegex.test(password);
        console.log(result);
        console.log(password);
        setValidPassword(result);
        const pwd = password===matchPassword;
        setMatchPassword(pwd);
    },[password,matchPassword]);

    useEffect(()=>{
        setErrMsg('');
    },[userName,nom,prenom,dateDeNaissance,lieuDeNaissance,password,matchPassword,profession,numtelephone])

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const userTest =  usernameRegex.test(userName);
        const pwdTest = passwordRegex.test(password);
        if (!userTest || !pwdTest) {
            setErrMsg("entrer invalide");
            console.log(errMsg);
            return;
        }
        console.log(userName,password);
        setSuccess(true);

        try {
            const response = await axios.post('/saveetudiant',JSON.stringify({
                userName,
                nom,
                prenom,
                dateDeNaissance,
                lieuDeNaissance,
                numtelephone,
                password,
                profession,
                numeroCarte,
                filiere,
                anneeUniversitaire,
                niveau,
                cohorte:{
                    idCohorte:cohorteRef.current.value
                }
            }),
            {
                headers:{'Content-Type':'application/json'},
            });
            if (response) {
                console.log(response.data);
                console.log(JSON.stringify(response));
                setUserName('');
                setNom('');
                setPrenom('');
                setLieuDeNaissance('');
                setNumtelephone('');
                setPassword('');
                setMatchPassword('');
                setProfession('');
                setNumeroCarte('');
                setFiliere('');
                setNiveau('');
            }
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='grid grid-cols-5 gap-1'>
        <div>
            <NavigationEtudiant />
        </div>


        <div className='bg-fixed  bg-no-repeat bg-cover pb-4 col-span-4 h-full w-full grid	p-28 pt-8 h-scren border-4 rounded-md' 
        style={{backgroundImage:`url(${univ})`}}
        >
            <div className='flex justify-center mb-8 inline-block border border-blue-500 rounded py-1 px-1 bg-blue-500 text-white'>
                <Link to='/listedesprofs'>afficher les professeurs</Link>
            </div>
            <form className="w-full w-full bg-gray-900 opacity-75 p-2" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" for="grid-first-name">
                    nom d'utilisateur
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                id="grid-first-name" type="text" placeholder="Jane"
                onChange={(e)=>setUserName(e.target.value)}
                         required
                         aria-describedby='username'
                         aria-invalid={validUsername ? true :false}
                         onFocus={()=>setUsernameFocus(true)}
                         onBlur={()=>setUsernameFocus(false)}
                         ref={userRef}
                />
                <p id='username' className={userName && usernameFocus && !validUsername ? 'visible text-gray-200 text-xs font-bold' : 'invisible'}>
                            username invalide
                </p>
                </div>
                <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" for="grid-last-name">
                    nom
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                id="grid-last-name" type="text" placeholder="Doe"
                onChange={(e)=>setNom(e.target.value)}
                         required
                         aria-invalid={validUsername ? true :false}
                         onFocus={()=>setNomFocus(true)}
                         onBlur={()=>setNomFocus(false)}
                         ref={userRef}
                />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" for="grid-first-name">
                    prenom
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                 id="grid-first-name" type="text" placeholder="Jane"
                 onChange={(e)=>setPrenom(e.target.value)}
                         required
                         aria-invalid={validUsername ? true :false}
                         onFocus={()=>setPrenomFocus(true)}
                         onBlur={()=>setPrenomFocus(false)}
                         ref={userRef}
                 />
                </div>
                <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" for="grid-last-name">
                    date de date De Naissance
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                id="grid-last-name" type="date" placeholder="Doe"
                onChange={(e)=>setDateDeNaissance(e.target.value)}
                required
                onFocus={()=>setDateDeNaissanceFocus(true)}
                onBlur={()=>setDateDeNaissanceFocus(false)}
                
                />
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" for="grid-first-name">
                    lieu de Naissance
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
                 type="text" placeholder="Jane"
                 onChange={(e)=>setLieuDeNaissance(e.target.value)}
                required
                onFocus={()=>setLieuDeNaissanceFocus(true)}
                onBlur={()=>setLieuDeNaissanceFocus(false)}
                ref={userRef}
                 />
                </div>
                <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" for="grid-last-name">
                    numero telephone
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                id="grid-last-name" type="text" placeholder="Doe"
                onChange={(e)=>setNumtelephone(e.target.value)}
                required
                onFocus={()=>setNumtelephoneFocus(true)}
                onBlur={()=>setNumtelephoneFocus(false)}
                ref={userRef}
                />
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" for="grid-first-name">
                    mot de passe 
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                id="grid-first-name" type="text" placeholder="Jane"
                onChange={(e)=>setPassword(e.target.value)}
                         required
                         onFocus={()=>setPasswordFocus(true)}
                         onBlur={()=>setPasswordFocus(false)}
                         ref={userRef}
                />
                
                </div>
                <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" for="grid-last-name">
                    confirmer mot de passe
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name"
                 type="text" placeholder="Doe"
                 onChange={(e)=>setMatchPassword(e.target.value)}
                 required
                 onFocus={()=>setMatchPasswordFocus(true)}
                 onBlur={()=>setMatchPasswordFocus(false)}
                 ref={userRef}
                 />
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" for="grid-first-name">
                    profession
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                id="grid-first-name" type="text" placeholder="Jane"
                onChange={(e)=>setProfession(e.target.value)}
                required
                onFocus={()=>setProfessionFocus(true)}
                onBlur={()=>setProfessionFocus(false)}
                ref={userRef}
                />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" for="grid-first-name">
                    numero carte
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                id="grid-first-name" type="text" placeholder="Jane"
                onChange={(e)=>setNumeroCarte(e.target.value)}
                        required
                        onFocus={()=>setNumeroCarteFocus(true)}
                        onBlur={()=>setNumeroCarteFocus(false)}
                />
                
                </div> 
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" for="grid-first-name">
                        filiere
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                    id="grid-first-name" type="text" placeholder="Jane"
                    onChange={(e)=>setFiliere(e.target.value)}
                    required
                    onFocus={()=>setFiliereFocus(true)}
                    onBlur={()=>setFiliereFocus(false)}
                    />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" for="grid-first-name">
                        annee universitaire
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                    id="grid-first-name" type="date" placeholder="Jane"
                    onChange={(e)=>setAnneeUniversitaire(e.target.value)}
                            required
                            onFocus={()=>setanneeUniversitaireFocus(true)}
                            onBlur={()=>setanneeUniversitaireFocus(false)}
                    /> 
                </div>

                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" for="grid-first-name">
                        niveau
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                    id="grid-first-name" type="text" placeholder="Jane"
                    onChange={(e)=>setNiveau(e.target.value)}
                        required
                        onFocus={()=>setNiveauFocus(true)}
                        onBlur={()=>setNiveauFocus(false)}
                    /> 
                </div> 
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" for="grid-first-name">
                        cohorte
                    </label>
                    <div className="relative">
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        id="grid-state"
                        onChange={(e)=>setCohorte(e.target.value)}
                        required
                        onFocus={()=>setCohorteFocuce(true)}
                        onBlur={()=>setCohorteFocuce(false)}
                        ref={cohorteRef}
                        >
                        {
                                cohortes.map((options)=>(
                                    <option key={options.idCohorte} value={options.idCohorte}>
                                         {options.nomCohorte}
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

export default EtudiantRegistration