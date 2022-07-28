import CartContext from './cart-context';

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};
  const remoceItemToCartHandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmout: 0,
    addItem: addItemToCartHandler,
    removeItem: remoceItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
