export const toDoReducer = (intialState, action) => {
  switch (action.type) {
    case "[TODO] add todo":
      return [...intialState, action.payload];
    case "[TODO] delete todo":
      return intialState.filter((todo) => todo.id !== action.payload);
    case "[TODO] toggle todo":
      return intialState.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
    default:
      return intialState;
  }
};
