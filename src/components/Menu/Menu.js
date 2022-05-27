import { useContext } from 'react';

import styles from './Menu.module.css';
import Card from '../UI/Card/Card';
import MenuContext from '../../context/menu-context';
import MenuItem from './MenuItem';


const Menu = () => {
  const menuCtx = useContext(MenuContext);
  const displayMenu = 
    menuCtx.menuList.map(item => {
      return (
        <MenuItem 
          key={item.id}
          id={item.id}
          dish={item.dish}
          description={item.description}
          price={`$${item.price}`} />
      )
    });
  
  return (
    <Card className={styles.menu}>
      <ul>
        {displayMenu}
      </ul>
    </Card>
  );
};

export default Menu;