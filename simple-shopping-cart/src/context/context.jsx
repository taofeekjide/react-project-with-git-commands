import { createContext, useState } from "react";

export const ShoppingCartContext = createContext(null);

function ShoppingCartProvider({ children }) {

  const [products, setProducts] = useState([]);

  return (
    <ShoppingCartContext.Provider value={{products, setProducts}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartProvider;
