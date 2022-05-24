import styles from './Cart.module.css';
import Card from '../UI/Card/Card';

const Cart = () => {
  return (
    <Card className={styles.cart}>
      <p>Your Cart</p>
      <Card className={styles.counter}>1</Card>
    </Card>
  );};

  export default Cart;