import { Route, Routes } from "react-router-dom";
import Departement from "./administrateur/Departement";
import Navigation from "./administrateur/Navigation";
import ParametreAdmin from "./administrateur/ParametreAdmin";
import Professeur from "./administrateur/Professeur";
import Role from "./administrateur/Role";
import EtudiantRegistration from "./scolarite/EtudiantRegistration";
import NavigationEtudiant from "./scolarite/NavigationEtudiant";
import Absence from "./professeur/Absence";
import NavigationProf from "./professeur/NavigationProf";
import Note from "./professeur/Note";
import Parametre from "./professeur/Parametre";
import Login from "./Registration/Login";
import Scolarite from "./administrateur/Scolarite";
import Test from "./Test";
import LoginPage from "./Registration/LoginPage";
import ProfesseurLists from "./administrateur/ProfesseurLists";
import DetailProfesseur from "./administrateur/DetailProfesseur";
import Matiere from "./chefDepartement/Matiere";
import NavigationChefDepart from "./chefDepartement/NavigationChefDepart";
import AffectationProf from "./chefDepartement/AffectationProf";
import ListerEtudiant from "./professeur/ListerEtudiant";
import DetailEtudiant from "./cohorte/DetailEtudiant";
import Licence1 from "./cohorte/Licence1";
import Etudiant from "./Etudiant/Etudiant";
import Navigationmain from "./Navigation/Navigationmain";

function App() {
  return (
    <div className="h-screen">
      <main>
        <Routes>
          <Route path="/loginpage" element={<Login/>} />
          <Route path="/ajouterole" element={<Role/>} />
          <Route path="/espaceadmin" element={<Navigation/>} />
          <Route path="/ajouteprofesseur" element={<Professeur/>} />
          <Route path="/ajouternote" element={<Note/>} />
          <Route path="/marqueabsence" element={<Absence/>} />
          <Route path="/espaceprofesseur" element={<NavigationProf />} />
          <Route path="/parametreProf" element={<Parametre/>} />
          <Route path="/parametreAdmin" element={<ParametreAdmin />} />
          <Route path="/ajouterdepartement" element={<Departement />} />
          <Route path="/ajouteretudiant" element={<EtudiantRegistration />} />
          <Route path="/navigationetudiant" element={<NavigationEtudiant />} />
          <Route path="/ajouterscolarite" element={<Scolarite/>} />
          <Route path="/test" element={<Test/>} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/listedesprofs" element={<ProfesseurLists />} />
          <Route path="/prof/:id" element={<DetailProfesseur />} />
          <Route path="/addmatiere" element={<Matiere />} />
          <Route path="/chefdepartement" element={<NavigationChefDepart />} />
          <Route path="/affecterprof" element={<AffectationProf />} />
          <Route path="/listeretudiant" element={<ListerEtudiant />} />
          <Route path="/licence1" element={<Licence1 />} />
          <Route path="/licence1/cohorte/:id" element={<DetailEtudiant />} />
          <Route path="/etudiant" element={<Etudiant />} />
          <Route path="/mainnavigation" element={<Navigationmain /> } />
        </Routes>
      </main>
    </div>
  )
}

export default App;
