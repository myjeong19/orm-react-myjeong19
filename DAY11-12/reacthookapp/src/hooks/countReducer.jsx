export const countReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return state + 1;
    case 'subtract':
      return state - 1;
    case 'init':
      return 0;
    default:
      return state;
  }
};
