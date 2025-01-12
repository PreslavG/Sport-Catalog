import React, { useState, useEffect } from 'react';
import './index.css';
import { ColRef, db } from './config/Config'; 
import { collection, getDocs, query, where, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom'; 
import AddProduct from './AddProduct';
import FilterProduct from './FilterProducts';

const Catalog = () => {
  const [items, setItems] = useState([]);
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);
  const [isFilterProductOpen, setIsFilterProductOpen] = useState(false);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productImageUrl, setProductImageUrl] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [currentCategory, setCurrentCategory] = useState('');
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(ColRef);
        const fetchedItems = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setItems(fetchedItems);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  const openFilterProduct = () => {
    setIsFilterProductOpen(true)
  };
  const closeFilterProduct = () => {
    setIsFilterProductOpen(false)
  };
  


  const openAddProduct = () => {
    setIsAddProductOpen(true);
  };

  const closeAddProduct = () => {
    setIsAddProductOpen(false);
  };

  const filteredItems = currentCategory
  ? items.filter(item => item.Productcateg === currentCategory)
  : items;


  const addProduct = async () => {
    if (!productName || !productPrice || !productCategory || !productImageUrl || !productDescription) {
      alert('Please fill in all fields.');
      return;
    }

    const newProduct = {
      Productname: productName,
      Productprice: productPrice,
      Productcateg: productCategory,
      Productimg: productImageUrl,
      Productdesc: productDescription,
    };

    try {
      const productsRef = collection(db, 'items');
      const q = query(productsRef, where("Productname", "==", newProduct.Productname));
      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        console.error("Item already exists!");
        alert("Item already exists!");
        return;
      }

      await addDoc(productsRef, newProduct);
      console.log("Product added successfully!");

      window.location.reload(); 
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };


  return (
    <div className="catalog-items">
      <h1 id="catalog-title">Catalog</h1>
      <div className="catalog-view">
    {filteredItems.map((item) => (
      <div className="product-cards" key={item.id}>
        <div className="product-image">
          <img 
            src={item.Productimg} 
            alt={item.Productname} 
            onClick={() => navigate(`/item/${item.id}`, {
              state: {
                name: item.Productname,
                price: item.Productprice,
                description: item.Productdesc,
                category: item.Productcateg,
                img: item.Productimg
              }
            })} 
          />
        </div>
        <div className="product-name">{item.Productname}</div>
        <div className="product-price">{item.Productprice} lv</div>
        <div className="product-desc">{item.Productdesc}</div>
        <div className="product-category">{item.Productcateg}</div>
      </div>
    ))}
  </div>
      <div className='buttons'>
      <button onClick={openAddProduct} id="add-button">ADD</button>
      <button onClick={openFilterProduct} id="filter-button">FILTER</button>
      </div>

      <AddProduct 
        isOpen={isAddProductOpen} 
        onClose={closeAddProduct} 
        onSave={addProduct}
        productName={productName} 
        setProductName={setProductName}
        productPrice={productPrice} 
        setProductPrice={setProductPrice}
        productCategory={productCategory} 
        setProductCategory={setProductCategory}
        productImageUrl={productImageUrl} 
        setProductImageUrl={setProductImageUrl}
        productDescription={productDescription} 
        setProductDescription={setProductDescription}
      />

      <FilterProduct 
        isOpen={isFilterProductOpen} 
        onClose={closeFilterProduct} 
        setCategory={setCurrentCategory} 
      /> 
    </div>
  );
};

export default Catalog;
