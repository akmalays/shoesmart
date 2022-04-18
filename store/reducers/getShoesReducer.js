const initialState = { listAllShoes: [], isLoading: true };

const getShoesReducer = (state = initialState, action) => {
  if (action.type === "SET_LIST_SHOES_DATA") {
    return {
      ...state,
      listAllShoes: action.payload,
    };
  }
  return state;
};

export default getShoesReducer;
