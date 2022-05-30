import styles from './MenuInput.module.css';
import Button from '../UI/Button/Button';

const MenuInput = () => {
  return (
    <div className={styles['add-item']}>
      <label htmlFor="amount">Amount</label>
      <input type="number" id="amount" defaultValue="1" /> <br />
      <Button>
        + Add
      </Button>
    </div>
  )};

  export default MenuInput;