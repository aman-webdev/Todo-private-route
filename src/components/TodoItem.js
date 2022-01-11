import styled from "styled-components";
import { useDispatch } from "react-redux";
import { removeTodo } from "../redux/actions";
import Button from "./Button";
const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <StyledTodoItem>
      <p className="todo-item">{todo}</p>
      <Button
        className="remove-todo"
        onClick={() => dispatch(removeTodo(todo))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-checks"
          width="34"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1"
          stroke="black"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M7 12l5 5l10 -10" />
          <path d="M2 12l5 5m5 -5l5 -5" />
        </svg>
      </Button>
    </StyledTodoItem>
  );
};
const StyledTodoItem = styled.div`
  background: #16151c;
  width: 80%;
  padding: 1rem 2rem;
  border-radius: 15px;
  color: rgba(255, 255, 255, 0.8);
  margin: 1rem 0;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    & {
      width: 90%;
    }
  }
`;
export default TodoItem;
