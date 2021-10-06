const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }

  if (action.type === "REMOVE") {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    };
  }

  if (action.type === "INCREASE") {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });

    return { ...state, cart: tempCart };
  }

  if (action.type === "DECREASE") {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: tempCart };
  }

  if (action.type === "ADD") {
    let tempCart;
    if (state.cart.find((element) => element.id === action.payload.id)) {
      tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          return { ...cartItem, amount: cartItem.amount + 1 };
        }
        return cartItem;
      });
    } else {
      let newItem;
      if (state.cart.length === 0) {
        newItem = { ...action.payload, amount: 1 };
      } else {
        newItem = { ...action.payload, amount: 0 };
      }
      let newCart = state.cart;

      newCart.push(newItem);
      return { ...state, cart: newCart };
    }

    return { ...state, cart: tempCart };
  }
  return state;
};

export default reducer;
