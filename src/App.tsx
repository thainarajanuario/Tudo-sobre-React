import React from 'react';
import Footer from './components/estaticos/footer/Footer';
import Navbar from './components/estaticos/navbar/Navbar';
import Home from './paginas/home/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './paginas/login/Login';


function App(){
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/home' element={<Home />}/>
      </Routes>
    <Footer />
    </Router> 

  );
}
export default App;