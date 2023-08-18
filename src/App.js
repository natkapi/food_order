import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {

  const [cartInShow, setCartInShow]= useState(false)
  function showCartHandler(){
    setCartInShow(true);
  }
  function hideCart(){
    setCartInShow(false);
  }
  
  return (
    <CartProvider>
      {cartInShow && <Cart onClose={hideCart} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
