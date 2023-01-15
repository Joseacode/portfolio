

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Principal from './components/containers/principalpage.jsx';
import Navbar from './components/pures/navbar/navbar.jsx';
import Page404 from './pages/404/page404.jsx';

function App() {

  
  return (
    <div className="App">
    <BrowserRouter>
        <Navbar/>
        <Routes> 
          <Route path="/" element={<Principal />} />
          <Route path="/contact" element={<div>En construcción</div>} />
          <Route path="*" element={<Page404 />} />
        </Routes>  
      </BrowserRouter>
        
    </div>
  );
}

export default App;
