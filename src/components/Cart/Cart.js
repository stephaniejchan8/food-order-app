import styles from './Cart.module.css';

const Cart = () => {
  return (
    <div className={styles.cart}>
      <p>Your Cart</p>
      <p className={styles.counter}>1</p>
    </div>
  );};

  export default Cart;