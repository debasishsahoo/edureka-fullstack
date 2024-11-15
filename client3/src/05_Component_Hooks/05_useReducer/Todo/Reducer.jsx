

const Reducer = (state, action) => {
  console.log('action:', action)
  console.log('state:', state)
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });

    default:
      return state;
  }
};

export default Reducer;
