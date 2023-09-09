
import './App.css';
import Header from './Components/header/header';
import MainPanal from "./Components/MainPanal/mainPanal"
import Counytryname from './Components/Bycountryname/Counytryname';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
   < BrowserRouter>
    <div className="App">
     <Header></Header>
   <Routes>
     <Route path='/mainPanal' element={<MainPanal></MainPanal>}></Route>
     <Route path='/Counytryname' element={<Counytryname/>}></Route>
     {/* <Route path='/mapPage' element={<MapPage></MapPage>}></Route> */}



     
   
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
