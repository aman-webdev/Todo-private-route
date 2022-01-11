import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo } from "../redux/actions";
import InputComponent from "./InputComponent";
import Button from "./Button";
import styled from "styled-components";
import TodoItem from "./TodoItem";
const TodoCollection = () => {
  const [currentTodo, setCurrentTodo] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoList);

  const onChangeHandler = (e) => {
    setCurrentTodo(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!currentTodo) setError(true);
    else {
      dispatch(addTodo(currentTodo));
      setCurrentTodo("");
      setError(false);
    }
  };

  return (
    <MainContainer>
      <div className="container">
        <h3>just tasks</h3>
        <form onSubmit={(e) => onFormSubmit(e)}>
          <InputComponent
            className="todo-input"
            value={currentTodo}
            onChangeHandler={onChangeHandler}
          />

          <Button className="todo-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-plus"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="black"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </Button>
        </form>
        {error ? <p className="error">The task can't be empty</p> : null}
        <div className="list-container">
          {todoList.map((todo, index) => (
            <TodoItem key={index} todo={todo} />
          ))}
        </div>
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  padding: 3rem;
  align-self: flex-start;
  margin-bottom: auto;
  width: 100vw;
  height: 100vh;
  margin: auto;
  .container {
    width: 60%;
    margin: 0 auto;
  }
  .error {
    color: rgb(235, 119, 157);
    font-size: 0.8rem;
  }
  h3 {
    font-size: 2rem;
    opacity: 0.7;
  }
  form {
    margin: 2rem auto;
    display: flex;

    gap: 2rem;
    align-items: center;
    justify-content: center;
  }
  .list-container {
    margin-top: 2rem;
  }
  @media (max-width: 768px) {
    .container {
      width: 100%;
    }
  }
`;

export default TodoCollection;
