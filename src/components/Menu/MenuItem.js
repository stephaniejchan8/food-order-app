import { useContext } from 'react';
import MenuContext from '../../context/menu-context';
import MenuDish from './MenuDish';
import MenuInput from './MenuInput';
import styles from './MenuItem.module.css';

const MenuItem = (props) => {
  const menuCtx = useContext(MenuContext);
  const { id: itemId } = props;
  // const displayItem = menuCtx.menuList.find(item => (item.id === itemId));
  const addCartHandler = quantity => {
    switch (itemId) {
      case 1:
        menuCtx.sushiHandler(quantity);
        break;
      default:
        console.log('unrecognised');
    }
  };

  return (
    <li className={styles['menu-item']}>
      <MenuDish 
        menuId={props.id}
        // dish={displayItem.dish}
        // description={displayItem.description}
        // price={`$${displayItem.price}`} 
        />
      <MenuInput onAddCart={addCartHandler} />
    </li>
  );
};

export default MenuItem;