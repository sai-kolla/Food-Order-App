import { Header } from './components/layout/header';
import { Meals } from './components/meals/meals';
import { Cart } from './components/cart/cart';
import { useState } from 'react';
import { CartProvider } from './store/cartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCart = () => setCartIsShown(true);

  const hideCart = () => setCartIsShown(false);

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCart} />}
      <Header onShowCart={showCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
