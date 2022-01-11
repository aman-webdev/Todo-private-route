import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Todo from "./pages/Todo";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  const { isLoggedIn } = useSelector((state) => state.user);

  return (
    <AppContainer>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/todo"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Todo />
            </PrivateRoute>
          }
        />
      </Routes>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
`;

export default App;
