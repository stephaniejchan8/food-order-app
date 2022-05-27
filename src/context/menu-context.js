import React from "react";

const MenuContext = React.createContext({
    menuList: [],
    updateCart: () => {}
  });

export const MenuContextProvider = (props) => {
  const menuList = [
    {
      id: 1,
      dish: 'Sushi',
      description: 'Finest fish and veggies',
      price: '22.99'
    }, {
      id: 2,
      dish: 'Schnitzel',
      description: 'A German specialty!',
      price: '16.50'
    }, {
      id: 3,
      dish: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: '12.99'
    }, {
      id: 4,
      dish: 'Green Bowl',
      description: 'Healthy... and green...',
      price: '18.99'
    }
  ];

  const tempFunction = () => {
    console.log('test');
  };

  return (
    <MenuContext.Provider value={{
      menuList: menuList,
      updateCart: tempFunction
    }}>
      {props.children}
    </MenuContext.Provider>
  )};

  export default MenuContext;