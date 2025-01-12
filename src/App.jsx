import React from 'react';
import Navbar from './components/Navbar';
import Home from './Home';
import Catalog from './Catalog';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CatalogItem from './CatalogItem';

const App = () => {
  return (
    <div>
      <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Catalog" element={<Catalog />} />
                <Route path="/item/:id" element={<CatalogItem />} />
            </Routes>
    </div>
  );
};

export default App;
