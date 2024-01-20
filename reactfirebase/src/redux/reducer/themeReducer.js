const mode = {
  darkMode: false,
};

const themeReducer = (state = mode, action) => {
  if (action.type === "DARK") {
    return {
      ...state,
      darkMode: !state.darkMode,
    };
  }

  return state;
};

export default themeReducer;
