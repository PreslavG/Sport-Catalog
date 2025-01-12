import React from 'react';
import './index.css'; 

const FilterProduct = ({ isOpen, onClose, setCategory }) => {
  if (!isOpen) return null;

  const handleFilterClick = (category) => {
    setCategory(category);
    onClose();
  };

  return (
    <div className="addproduct-overlay">
    <div className='filterproduct-content'>
      <button onClick={() => handleFilterClick('Clothing')}>Clothing</button>
      <button onClick={() => handleFilterClick('Accessories')}>Accessories</button>
      <button onClick={() => handleFilterClick('Shoes')}>Shoes</button>
      <button onClick={() => handleFilterClick(null)}>All</button>
      <button id='close-button' onClick={onClose}>Close</button>

    </div>
    </div>
  );
};


export default FilterProduct;