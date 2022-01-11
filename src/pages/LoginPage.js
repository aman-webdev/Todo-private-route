import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authenticateUserAction } from "../redux/actions";
import styled from "styled-components";
import Button from "../components/Button";
import InputComponent from "../components/InputComponent";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    formUsername: "",
    formPassword: "",
  });
  const [error, setError] = useState(false);
  const { username, password } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setCredentials({ ...credentials, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const { formUsername, formPassword } = credentials;

    if (formUsername === username && formPassword === password) {
      dispatch(authenticateUserAction());
      setError(false);
      navigate("/todo");
    } else {
      setError(true);
    }
  };

  return (
    <LoginContainer>
      <h1 className="title">todo app</h1>
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <InputComponent
          name="formUsername"
          value={credentials.formUsername}
          label="Username"
          onChangeHandler={onChangeHandler}
        />
        <InputComponent
          name="formPassword"
          label="Password"
          type="password"
          value={credentials.formPassword}
          onChangeHandler={onChangeHandler}
        />
        {error ? <p className="error">Incorrect! Try again</p> : null}
        <Button text="Login" type="submit">
          Login
        </Button>
      </form>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  padding: 2rem;
  width: 40%;
  form > * {
    margin-top: 2rem;
  }
  .title {
    font-size: 2.8rem;
    opacity: 0.9;
  }
  button {
    margin-top: 3rem;
  }
  .error {
    color: rgb(235, 119, 157);
    font-size: 0.8rem;
  }
  @media (max-width: 768px) {
    & {
      width: 80%;
    }
  }
`;

export default LoginPage;
