
export const dataStateReducer = (state, action) => {
  switch (action.type) {
    case 'DATA_LOADED':
      state.numberForButtons = Math.ceil(
        action.payload.length / state.itemsPerPage
      );
       state.products = action.payload.slice(state.startingPoint, state.endPoint)
       state.allProducts = action.payload;
      return {
         ...state,
      };
      case 'PAGE_NUMBER':
        state.endPoint = action.payload * state.itemsPerPage
        state.startingPoint = state.endPoint - 10
        state.products = state.allProducts.slice(state.startingPoint, state.endPoint)
        state.page = action.payload
        return {...state};
    default:
      return state;
  }
};

export const dataStateReducerObj = {
  page: 1,
  itemsPerPage: 10,
  startingPoint: 0,
  endPoint: 10,
  products: [],
  numberForButtons: 0,
  allProducts: []
};
