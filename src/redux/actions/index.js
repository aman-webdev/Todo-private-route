export const authenticateUserAction = () => {
  return { type: "AUTHENTICATE_USER" };
};

export const addTodo = (todo) => {
  return { type: "ADD_TODO", payload: todo };
};

export const removeTodo = (todo) => {
  return { type: "REMOVE_TODO", payload: todo };
};
