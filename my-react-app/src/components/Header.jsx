import React from 'react';
import '../styles/App.css';

const Header = ({ totalPrice, onOpenCart }) => {
  return (
    <header className="header">
      <div className="header__left">
        <div className="header__logo" />
        <div>
          <h3 className="header__title">REACT SNEAKERS</h3>
          <p className="header__subtitle">Магазин лучших кроссовок</p>
        </div>
      </div>

      <div className="header__right">
        <button className="header__cart" onClick={onOpenCart}>
          <span className="icon icon-cart" />
          <span>{totalPrice.toLocaleString('ru-RU')} руб.</span>
        </button>

        <button className="header__icon-btn">
          <span className="icon icon-heart" />
          <span className="header__icon-text">Закладки</span>
        </button>

        <button className="header__icon-btn">
          <span className="icon icon-user" />
          <span className="header__icon-text">Профиль</span>
        </button>
      </div>
    </header>
  );
};

export default Header;