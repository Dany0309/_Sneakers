import React from 'react';
import '../styles/App.css';

const Card = ({ item, onAddToCart, isAdded }) => {
  return (
    <div className="card">
      <button className="card__favorite-btn">
        <span className="icon icon-heart-outline" />
      </button>

      <img src={item.imageUrl} alt={item.title} className="card__img" />

      <p className="card__title">{item.title}</p>

      <div className="card__bottom">
        <div className="card__price-block">
          <span className="card__price-label">ЦЕНА:</span>
          <span className="card__price">
            {item.price.toLocaleString('ru-RU')} руб.
          </span>
        </div>

        <button
          className={`card__add-btn ${isAdded ? 'card__add-btn--added' : ''}`}
          onClick={() => onAddToCart(item)}
        >
          {isAdded ? '✓' : '+'}
        </button>
      </div>
    </div>
  );
};

export default Card;