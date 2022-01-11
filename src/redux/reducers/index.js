import { combineReducers } from "redux";
import AuthenticateReducer from "./AuthenticateReducer";
import ModifyTodoReducer from "./ModifyTodoReducer";

export default combineReducers({
  user: AuthenticateReducer,
  todoList: ModifyTodoReducer,
});
