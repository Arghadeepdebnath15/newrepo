import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  // Generate star rating display
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} style={{ color: i <= rating ? '#ffc107' : '#e4e5e9' }}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <div className="rating">
          {renderStars(Math.round(product.avgRating))}
          <span> ({product.reviews.length} reviews)</span>
        </div>
        <p className="product-description">
          {product.description.length > 100
            ? `${product.description.substring(0, 100)}...`
            : product.description}
        </p>
        <Link to={`/product/${product._id}`} className="view-btn">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard; 