import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import {BrowseRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import CardComponent from './Components/Card/CardComponent';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <CardComponent/>
     <Footer/>
    </div>
  );
}

export default App;