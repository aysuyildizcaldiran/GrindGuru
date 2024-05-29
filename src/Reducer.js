
const initialState = { color: false };

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_COLOR':
      return { ...state, color: !state.color };
    default:
      return state;
  }
};
export default reducer;