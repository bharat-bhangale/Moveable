import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "../src/components/Navbar/Navbar";
import Sidebar from "../src/components/Sidebar/Sidebar";
import Footer from "../src/components/Footer/Footer";
import Draggable from "../src/pages/Draggable";
import Resizable from './pages/Resizable';
import Scalable from './pages/Scalable';
import Rotatable from './pages/Rotatable';
import Warpable from './pages/Warpable';
import Clippable from './pages/Clippable';
import Roundable from './pages/Roundable';
import Pinchable from './pages/Pinchable';
import OriginDraggable from './pages/OriginDraggable';
import DRR from "./pages/DRR";
import DSR from './pages/DSR';
import DODR from './pages/DODR';
import AllInOne from './pages/AllInOne';


const App = () => {
  return (

    <>
      <Navbar />
      <div className="flex h-full">
        <Sidebar />
        <div className="flex-1 p-3">
          <Routes>
            <Route path="/" element={<Draggable />} />
            <Route path="/draggable" element={<Draggable />} />
            <Route path="/resizable" element={<Resizable />} />
            <Route path="/scalable" element={<Scalable />} />
            <Route path="/rotatable" element={<Rotatable />} />
            <Route path="/warpable" element={<Warpable />} />
            <Route path="/clippable" element={<Clippable />} />
            <Route path="/roundable" element={<Roundable />} />
            <Route path="/origin-draggable" element={<OriginDraggable />} />
            <Route path="/pinchable" element={<Pinchable />} />
            <Route path='/DRR' element={<DRR />} />
            <Route path='/DSR' element={<DSR />} />
            <Route path='/DODR' element={<DODR />} />
            <Route path='/all-in-one' element={<AllInOne />} /> 
          </Routes>
        </div>
      </div>
      <Footer />
    </>

  );
};

export default App;
