import { useReducer } from "react";
import { Authcontext } from "./AuthContext";
import { types } from "./types";
import { reducer } from "./AuthReducer";

const init = ( ) => {

  const user = JSON.parse( localStorage.getItem('user'));

  return{
    logged: !!user,
    user
  }
}

export const AuthProvider = ({ children }) => {

  const [Authstate, dispatch] = useReducer(reducer, {}, init );

  const login = (name = "") => {

    const user = {
      id:'ABC',
      name
    }

    const action = {
      type: types.login,
      payload: user,
    };

    localStorage.setItem('user', JSON.stringify(user) );
    dispatch(action);
  };

  const logout = () => {
    localStorage.removeItem('user');
    const action = {type: types.logout};
    dispatch(action);
  };

  return (
    <Authcontext.Provider value={{ login, logout, ...Authstate }}>
      {children}
    </Authcontext.Provider>
  );
};
