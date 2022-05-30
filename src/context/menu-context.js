import React, {useReducer} from "react";

const MenuContext = React.createContext({
    menuList: [],
    cart: {},
    sushiHandler: () => {}
  });

export const MenuContextProvider = (props) => {
  const cartReducer = (state, action) => {
    if (action.type === 'SUSHI') {
      return {
        sushi: +state.sushi + +action.quantity, 
        schnitzel: state.schnitzel,
        burger: state.burger,
        bowl: state.bowl
      };
    }
  };

  const [cartState, dispatchCart] = useReducer(cartReducer, {
    sushi: '',
    schnitzel: '',
    burger: '',
    bowl: ''
  });

  const sushiHandler = quantity => {
    dispatchCart({
      type: 'SUSHI',
      quantity: quantity
    });
  };

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



  return (
    <MenuContext.Provider value={{
      menuList: menuList,
      cart: cartState,
      sushiHandler: sushiHandler
    }}>
      {props.children}
    </MenuContext.Provider>
  )};

  export default MenuContext;