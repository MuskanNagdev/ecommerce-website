import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import CardComponent from './Components/Card/CardComponent';
import Footer from './Components/Footer/Footer';
import Slider from './Components/Slider/Slider';
import AnotherNavbar from './Components/AnotherNavbar/AnotherNavbar';
import Women from './Components/Women/Women';
import Unstitched from './Components/Unstitched/Unstitched';
import Western from './Components/Western/Western';
import ShalwarKameez from './Components/ShalwarKameez/ShalwarKameez';
import Shirts from './Components/Shirts/Shirts';
import Kurta from './Components/Kurta/Kurta';
function App() {
  return (
    <div className="App">
      <Router>
     <Navbar/>
     <AnotherNavbar/>
     <Slider/>
      <Routes>
     <Route path="/"  Component={CardComponent}/>

      <Route path="/Women" exact Component={Women}/>
      <Route path="/Unstitched" exact Component={Unstitched}/>
      <Route path="/Western" exact Component={Western}/>
      <Route path="/Kurta" exact Component={Kurta}/>
      <Route path="/ShalwarKameez" exact Component={ShalwarKameez}/>
      <Route path="/Shirts" exact Component={Shirts}/>
      </Routes>
     
     <CardComponent/>
     <Footer/>
     </Router>
    </div>
  );
}

export default App;
