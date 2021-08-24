export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((total, item) => total + item.price, 0);
// export const getBasketTotal = (basket) =>
//   basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_T0_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: []
      }
    case "REMOVE_TO_BASKET":
      const indexItem = state.basket.findIndex((item) => item.id === action.id);
      let newBasket = [...state.basket];
      if (indexItem >= 0) {
        newBasket.splice(indexItem, 1);
      } else {
        console.warn("Cant remove product as its not in basket");
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
