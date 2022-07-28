import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[
        {
          id: 'm1',
          name: 'Sushi',
          description: 'Finest fish and veggies',
          price: 22.99,
        },
      ].map((item , i) => (
        <li key={i}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>총 금액</span>
        <span>55.5</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>닫기</button>
        <button className={classes.button}> 주문하기 </button>
      </div>
    </Modal>
  );
};

export default Cart;
