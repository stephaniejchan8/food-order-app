import { useRef } from 'react';
import styles from './MenuInput.module.css';
import Button from '../UI/Button/Button';

const MenuInput = (props) => {
  const dishRef = useRef();
  const readAmountHandler = () => {
    props.onAddCart(dishRef.current.value);
  };

  return (
    <div className={styles['add-item']}>
      <label htmlFor="amount">Amount</label>
      <input type="number" id="amount" defaultValue="1" ref={dishRef}/> <br />
      <Button onClick={readAmountHandler}>
        + Add
      </Button>
    </div>
  )};

  export default MenuInput;