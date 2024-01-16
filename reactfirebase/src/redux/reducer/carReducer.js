const init = {
  car: [],
  loading: true,
};

const carReducer = (state = init, action) => {
  if (action.type === "FETCH_CAR") {
    return {
      ...state,
      car: action.payload,
    };
  }
  if (action.type === "SET_LOADING") {
    return {
      ...state,
      loading: action.payload,
    };
  }
  return state;
};

export default carReducer;
