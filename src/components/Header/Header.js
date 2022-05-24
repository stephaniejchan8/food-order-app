import styles from './Header.module.css';
import Cart from '../Cart/Cart';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>ReactMeals</h1>
      <Cart />
    </header>
  );
};

export default Header;