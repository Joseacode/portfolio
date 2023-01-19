/**
 * En este componente App se organizan las rutas, para que cada pagina sea accesible desde el navegador.
 */

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from './pages/ladingpage/ladindingpage.jsx';
import Footbar from './components/pures/footbar/footbar.jsx';
import Navbar from './components/pures/navbar/navbar.jsx';
import Page404 from './pages/404/page404.jsx';
import Mailsender from './components/pures/mailsender';

function App() {

  return (
    <div className="App">
    <BrowserRouter>
        <Navbar/>
        <Routes> 
          <Route path="/" element={ <LandingPage /> } /> {/* Ruta a la página Ladingpage o de inicio  */}
          <Route path="/contact" element={ <Mailsender /> } /> {/* Ruta a la página Mailsender  */}
          <Route path="*" element={ <Page404 /> } />{/* Ruta a la página 404  */}
        </Routes> 
        <Footbar />   
      </BrowserRouter>
        
    </div>
  );
}

export default App;
