const INITIAL_STATE = {
  isLoggedIn: false,
  username: "react",
  password: "react@javascript",
};
const AuthenticateReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "AUTHENTICATE_USER":
      return { ...state, isLoggedIn: !state.isLoggedIn };
    default:
      return state;
  }
};

export default AuthenticateReducer;
