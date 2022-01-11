import styled from "styled-components";
const InputComponent = ({ label, onChangeHandler, ...otherProps }) => {
  return (
    <StyledInputContainer>
      <label>{label}</label>
      <StyledInput {...otherProps} onChange={(e) => onChangeHandler(e)} />
    </StyledInputContainer>
  );
};
const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  label {
    opacity: 0.6;
    text-transform: uppercase;
    font-size: 0.9rem;
  }
  .todo-input {
    background: #20212c;
    margin-bottom: 0.75rem;
    padding: 1.5rem 2rem;
  }
`;

const StyledInput = styled.input`
  background: #172030;
  border: none;
  font-weight: 300;
  padding: 0.5rem 1rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.25rem;
  border-radius: 8px;

  &:focus {
    outline: none;
  }
`;

export default InputComponent;
