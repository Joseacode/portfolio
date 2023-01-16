

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import LandingPage from './pages/ladingpage/ladindingpage.jsx';
import Footbar from './components/pures/footbar/footbar.jsx';
import Navbar from './components/pures/navbar/navbar.jsx';
import Page404 from './pages/404/page404.jsx';
import Mailsender from './components/containers/mailsender.jsx';



function App() {

  
  return (
    <div className="App">
    <BrowserRouter>
        <Navbar/>
        <Routes> 
          <Route path="/" element={ <LandingPage /> } />
          <Route path="/contact" element={ <Mailsender /> } />
          <Route path="*" element={ <Page404 /> } />
        </Routes> 
        <Footbar />   
      </BrowserRouter>
        
    </div>
  );
}

export default App;
