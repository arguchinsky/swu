export const dispatchLogger = () => (dispatch) => (action) => {
  console.log(action.type);

  return dispatch(action);
};
