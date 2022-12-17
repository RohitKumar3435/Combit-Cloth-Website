import React from 'react'
import Sidebar from './Components/Sidebar'
import OurProduct from './Components/OurProduct';
import OurProductItems from './Components/OurProductItems';
import MidBanner from './Components/MidBanner';
import RegulerCloth from './Components/RegulerCloth';
import Souvenirs from './Components/Souvenirs';
import Footer from './Components/Footer';


function App() {
  return (
    <>
      <Sidebar />
      <OurProduct />
      <OurProductItems />
      <MidBanner />
      <RegulerCloth />
      <Souvenirs />
      <Footer/>
    </>
  );
}

export default App;