import { useLocation } from 'react-router-dom';

const CatalogItem = () => {
  const { state } = useLocation(); 
  const { name, price, description, category, img } = state || {};



  return (
    <div className="catalog-item-view">
      <div className="product-image-view">
        <img src={img} alt={name} />
      </div>
      <div className="info-product">
        <h1 className="product-name-view">{name}</h1>
        <p className="product-price-view">Price: {price} lv</p>
        <p className="product-desc-view">Description: {description}</p>
        <p className="product-category">Category: {category}</p>
      </div>
    </div>
  );
};

export default CatalogItem;
