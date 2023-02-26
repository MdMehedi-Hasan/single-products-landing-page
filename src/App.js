import React from 'react';
import Center from './Components/Center';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <div className='bg-base-200'>
      <Navbar/>
      <Header/>
      <Center/>
      <Footer/>
    </div>
  );
};

export default App;