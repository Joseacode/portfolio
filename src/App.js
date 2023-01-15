

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Principal from './components/containers/principalpage.jsx';
import Navbar from './components/pures/navbar/navbar.jsx';

function App() {

  
  return (
    <div className="App">
    <BrowserRouter>
        <Navbar/>
        <Routes> 
          <Route path="/" element={<Principal />} />
          <Route path="/contact" element={<div>En construcción</div>} />
        </Routes>  
      </BrowserRouter>
        
    </div>
  );
}

export default App;
