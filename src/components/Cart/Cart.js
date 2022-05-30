import { useContext } from 'react';
import MenuContext from '../../context/menu-context';
import styles from './Cart.module.css';

const Cart = () => {
  const menuCtx = useContext(MenuContext);

  return (
    <div className={styles.cart}>
      <p>Your Cart</p>
      <p className={styles.counter}>{menuCtx.cart.sushi}</p>
    </div>
  );};

  export default Cart;