import React from 'react';
import './index.css'; 

const AddProduct = ({ isOpen, onClose, onSave, 
  productName, setProductName, 
  productPrice, setProductPrice, 
  productCategory, setProductCategory, 
  productImageUrl, setProductImageUrl, 
  productDescription, setProductDescription }) => {
  
  if (!isOpen) return null;

  return (
    <div className="addproduct-overlay">
      <div className="addproduct-content">
        <h2>Add New Product</h2>
        
        <label>
          Name:
          <input 
            type="text" 
            value={productName} 
            onChange={(e) => setProductName(e.target.value)} 
            required 
          />
        </label>
        
        <label>
          Price:
          <input 
            type="number" 
            value={productPrice} 
            onChange={(e) => setProductPrice(e.target.value)} 
            required 
          />
        </label>
        
        <label>
  Category:
  <select 
    value={productCategory} 
    onChange={(e) => setProductCategory(e.target.value)} 
    required
  >
    <option value="">Select a category</option>
    <option value="Clothing">Clothing</option>
    <option value="Accessories">Accessories</option>
    <option value="Shoes">Shoes</option>
  </select>
</label>
        
        <label>
          Image URL:
          <input 
            type="text" 
            value={productImageUrl} 
            onChange={(e) => setProductImageUrl(e.target.value)} 
            required 
          />
        </label>
        
        <label>
          Description:
          <input 
            type="text" 
            value={productDescription} 
            onChange={(e) => setProductDescription(e.target.value)} 
            required 
          />
        </label>
        
        <button id="save-button" onClick={onSave}>Save</button>
        <button id="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AddProduct;
