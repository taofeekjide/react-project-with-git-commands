import { createContext, useState } from "react";

export const ShoppingCartContext = createContext(null);

function ShoppingCartProvider({ children }) {

  const [cartItems, setCartItems] = useState([]);

  return (
    <ShoppingCartContext.Provider value={{cartItems, setCartItems}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartProvider;
