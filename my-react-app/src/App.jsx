import React, { useState, useMemo } from 'react';
import './styles/App.css';
import { sneakers } from './data';
import Header from './components/Header';
import Card from './components/Card';
import CartDrawer from './components/CartDrawer';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems((prev) => {
      const alreadyInCart = prev.some((obj) => obj.id === item.id);
      if (alreadyInCart) {
        // если уже в корзине — удаляем (переключатель)
        return prev.filter((obj) => obj.id !== item.id);
      }
      return [...prev, item];
    });
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const filteredItems = useMemo(
    () =>
      sneakers.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
      ),
    [searchValue]
  );

  const totalPrice = useMemo(
    () => cartItems.reduce((sum, obj) => sum + obj.price, 0),
    [cartItems]
  );
  const tax = Math.round(totalPrice * 0.05);

  return (
    <div className="wrapper">
      <CartDrawer
        isOpen={cartOpened}
        items={cartItems}
        onClose={() => setCartOpened(false)}
        onRemoveItem={handleRemoveFromCart}
        totalPrice={totalPrice}
        tax={tax}
      />

      <div className="content">
        <Header
          totalPrice={totalPrice}
          onOpenCart={() => setCartOpened(true)}
        />

        <main className="main">
          <div className="main__top">
            <h1>Все кроссовки</h1>
            <div className="search">
              <span className="icon icon-search" />
              <input
                type="text"
                placeholder="Поиск..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              {searchValue && (
                <button
                  className="search__clear"
                  onClick={() => setSearchValue('')}
                >
                  ×
                </button>
              )}
            </div>
          </div>

          <section className="cards-grid">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                item={item}
                onAddToCart={handleAddToCart}
                isAdded={cartItems.some((obj) => obj.id === item.id)}
              />
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;