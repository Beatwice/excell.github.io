import './App.css'; 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Development from './pages/project_pages/Development';
import Ui_Design from './pages/project_pages/Ui_Design';
import Vaccine from './pages/project_pages/ui_design_details/Vaccine';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/project/development' element={<Development/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/project/ui_design' element={<Ui_Design/>}/>
        <Route path='/project/ui_design/vaccine' element={<Vaccine/>}/>

      </Routes>
    </Router>
  );
}

export default App;
