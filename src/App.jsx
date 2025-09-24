
import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
  };

  return (
    <div className="app-container">
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="backdrop-blur-md bg-gradient-to-b from-black/40 to-black/70 h-250">
         <div className="flex justify-center">

          <div className="text-center mt-20">
            <h1 className="text-[#4caf50] text-5xl lg:text-6xl drop-shadow-lg mb-10">Welcome To Paradise Nursery</h1>
            <hr className="h-1 w-1/3 mx-auto mb-10 mt-4 bg-gradient-to-r from-[#4caf50] to-sky-400 border-0 rounded" />
            <p className="text-3xl text-sky-300 font-semibold mb-5">Where Green Meets Serenity</p>
          </div>
          
         </div>
          <div>
            <AboutUs/>
          </div>

          <div className='flex justify-center'>
            <button 
              className="bg-[#4caf50] py-2.5 px-5 rounded-sm text-white cursor-pointer hover:opacity-85 transition-all duration-400 mt-10" 
              onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
          </div>

      </div>
      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <ProductList onHomeClick={handleHomeClick}/>
      </div>
    </div>
  );
}

export default App;



