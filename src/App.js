import React from 'react';
import SimpleSlider from './components/Slider';
import './App.css'

import img from './img/OIP.jpg'
import img1 from './img/OIP (1).jpg'
import img2 from './img/OIP (2).jpg'
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer';

const App = () => {
  const images = [
    img,
    img1,
    img2,
    // Добавьте свои изображения в массив
  ];

  return (
    <div className="App">
      <Header />
      <SimpleSlider slides={images} />
      <Footer />
    </div>
  );
};

export default App;
