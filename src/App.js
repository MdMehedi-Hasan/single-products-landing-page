import React from 'react';
import Center from './Components/Center';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import './App.css'

const App = () => {
  return (
    <div className='body'>
      <Navbar/>
      <Header/>
      <Center/>
      <Footer/>
    </div>
  );
};

export default App;