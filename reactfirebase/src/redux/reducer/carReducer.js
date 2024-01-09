const init = {
  car: [],
};

const carReducer = (state = init, action) => {
  if (action.type === "FETCH_CAR") {
    return {
      ...state,
      car: action.payload,
    };
  }
  return state;
};

export default carReducer;
