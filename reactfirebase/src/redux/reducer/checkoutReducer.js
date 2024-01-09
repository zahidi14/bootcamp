const initCheck = {
  checkout: "",
};

const checkoutReducer = (state = initCheck, action) => {
  if (action.type === "FETCH_CHECKOUT") {
    return {
      ...state,
      car: action.payload,
    };
  }
  return state;
};

export default checkoutReducer;
