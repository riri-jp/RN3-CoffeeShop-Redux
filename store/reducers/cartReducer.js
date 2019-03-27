import * as actionTyeps from "../actions/types";

const initialState = {
  items: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTyeps.ADD_ITEM:
      let item = action.payload;
      let foundItem = state.items.find(
        theItem =>
          theItem.drink === item.drink && theItem.option === item.option
      );
      if (foundItem) {
        foundItem.quantity++;
        return {
          ...state,
          items: [...state.items]
        };
      } else {
        return {
          ...state,
          items: state.items.concat(item)
        };
      }
    default:
      return state;
  }
};

export default cartReducer;
