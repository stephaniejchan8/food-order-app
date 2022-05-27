import { useContext } from "react";
import MenuContext from "../../context/menu-context";
import styles from './MenuDish.module.css';

const MenuDish = (props) => {
  const menuCtx = useContext(MenuContext);
  const {menuId} = props;
  const dish = menuCtx.menuList.find(item => item.id === menuId);

  return (
    <div>
      <p className={styles.dish}>{dish.dish}</p>
      <p className={styles.description}>{dish.description}</p>
      <p className={styles.price}>{`$${dish.price}`}</p>
    </div>
  )};

export default MenuDish;