import styled from "styled-components";

const Button = ({ children, ...otherProps }) => {
  return <AccentButton {...otherProps}>{children}</AccentButton>;
};

const AccentButton = styled.button`
  padding: 0.5rem 1.25rem;
  border: none;
  background: #50c5d9;
  color: white;
  font-size: 1rem;
  width: 30%;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &.todo-button {
    background: #f979a1;

    width: 80px;
  }
  &.remove-todo {
    width: 60px;
    padding: 0.25rem;
    background: #f979a1;
  }
`;

export default Button;
