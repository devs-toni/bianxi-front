import React, { createContext, useCallback, useContext, useMemo, useReducer } from 'react'


const authStorage = JSON.parse(localStorage.getItem('AUTH'));

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {

  const initialState = {
    isAuthenticated: authStorage ? true : false,
    id: authStorage ? authStorage.id : 0,
    username: authStorage ? authStorage.username : '',
    role: authStorage ? authStorage.role : '',
    error: ''
  }

  const USER_ACTIONS = {

    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_ERROR: "LOGIN_ERROR",
    HANDLE_LIKE: "HANDLE_LIKE",
    RESET_ERROR: "RESET_ERROR",
    LOGOUT: "LOGOUT"
  }

  const reducer = (state, action) => {
    switch (action.type) {

      case USER_ACTIONS.RESET_ERROR:
        return {
          ...state,
          error: '',
        };

      case USER_ACTIONS.LOGIN_ERROR:
        return {
          isAuthenticated: false,
          id: 0,
          username: '',
          role: '',
          error: action.payload,
        };

      case USER_ACTIONS.LOGIN_SUCCESS:
        return {
          isAuthenticated: true,
          id: action.payload.id,
          username: action.payload.username,
          role: action.payload.role,
          error: '',
        }

      case USER_ACTIONS.LOGOUT:
        return {
          isAuthenticated: false,
          id: 0,
          username: '',
          role: '',
          error: '',
        }

      default:
        return state;
    }
  }

  const [user_state, dispatch] = useReducer(reducer, initialState);

  const login = useCallback((id, username, role, error) => {
    if (!error) {
      dispatch({ type: USER_ACTIONS.LOGIN_SUCCESS, payload: { id, username, role } })
      localStorage.setItem('AUTH', JSON.stringify({ isAuthenticated: true, id, username, role }));
    } else
      dispatch({ type: USER_ACTIONS.LOGIN_ERROR, payload: error })
  }, [])

  const reset = useCallback(() => {
    dispatch({ type: USER_ACTIONS.RESET_ERROR })
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem('AUTH');
    dispatch({ type: USER_ACTIONS.LOGOUT })
  }, [])

  const data = useMemo(() => ({
    user_state,
    login,
    logout,
    reset
  }), [login, logout, reset, user_state])

  return (
    <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
  )
}