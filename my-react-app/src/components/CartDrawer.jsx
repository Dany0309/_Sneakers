import React from 'react';
import '../styles/App.css';

const CartDrawer = ({
  isOpen,
  items,
  onClose,
  onRemoveItem,
  totalPrice,
  tax,
}) => {
  return (
    <>
      <div
        className={`overlay ${isOpen ? 'overlay--visible' : ''}`}
        onClick={onClose}
      />
      <aside className={`drawer ${isOpen ? 'drawer--open' : ''}`}>
        <div className="drawer__header">
          <h2>Корзина</h2>
          <button className="drawer__close" onClick={onClose}>
            ×
          </button>
        </div>

        {items.length === 0 ? (
          <div className="drawer__empty">
            <div className="drawer__empty-icon" />
            <h3>Корзина пустая</h3>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button className="btn btn--green" onClick={onClose}>
              ← Вернуться назад
            </button>
          </div>
        ) : (
          <>
            <div className="drawer__items">
              {items.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img
                    className="cart-item__img"
                    src={item.imageUrl}
                    alt={item.title}
                  />
                  <div className="cart-item__info">
                    <p>{item.title}</p>
                    <span>
                      {item.price.toLocaleString('ru-RU')} руб.
                    </span>
                  </div>
                  <button
                    className="cart-item__remove"
                    onClick={() => onRemoveItem(item.id)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            <div className="drawer__footer">
              <div className="drawer__row">
                <span>Итого:</span>
                <div className="drawer__dots" />
                <b>{totalPrice.toLocaleString('ru-RU')} руб.</b>
              </div>
              <div className="drawer__row">
                <span>Налог 5%:</span>
                <div className="drawer__dots" />
                <b>{tax.toLocaleString('ru-RU')} руб.</b>
              </div>
              <button className="btn btn--green btn--full">
                Оформить заказ →
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;