
import {BrowserRouter,Routes,Route} from "react-router-dom"
import AddNewPatient from "./Pages/AddNewPatient"
import Visited from "./Pages/History"
import Navbar from './Components/Navbar'
import Dashboard from './Pages/Dashboard'
import Medicines from "./Pages/Medicines"
import { useState } from 'react'
const App = () => {
  const [ patients, setPatients] = useState([]);
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>   

       <Route path="/" element={<Dashboard />} />

    <Route path="/add" element={<AddNewPatient patients={patients} setPatients={setPatients}/>}/>
    <Route
    path="/visited"
    element={<Visited
      patients={patients} />}
    />
    <Route path="/medicines" element={<Medicines />} />

    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
