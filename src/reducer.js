const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    localStorage.removeItem("cart");
    return { ...state, cart: [] };
  }

  if (action.type === "REMOVE") {
    const tempState = {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    };

    localStorage.setItem("cart", JSON.stringify(tempState.cart));

    return tempState;
  }

  if (action.type === "INCREASE") {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    localStorage.setItem("cart", JSON.stringify(tempCart));
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
    localStorage.setItem("cart", JSON.stringify(tempCart));
    return { ...state, cart: tempCart };
  }

  if (action.type === "ADD_NEW") {
    let newState = { ...state };
    let newPayload = action.payload;

    newState.cart.push(newPayload);
    localStorage.setItem("cart", JSON.stringify(newState.cart));
    return newState;
  }

  return state;
};

export default reducer;
