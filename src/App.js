import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Home from './Components/pages/Home'
import Services from './Components/pages/Services';
import Products from './Components/pages/Products';
import Signup from './Components/pages/Signup';


function App() {
  return (
    <>
    <Router>
     <Navbar></Navbar>
        <Routes>
           <Route path='/' exact element={ <Home/> }/>
           <Route path='/services' element = {<Services/>}/>
           <Route path='/products' element = {<Products/>}/>
           <Route path='/sign-up' element = {<Signup/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
