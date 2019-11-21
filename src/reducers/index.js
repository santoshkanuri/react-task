
  const initialState = {
    isLogin: null,
    users: null, 
    error: null
  };
  export default function read(state = initialState, action) {
  
    switch (action.type) {
  
      case 'USER_LOGIN': {
        return {
          ...state,
          UserLogin: action.UserLogin
        };
      }

      case 'USERS_LIST': {
        return {
          ...state,
          users: action.users
        };
      }

      case 'SET_ERROR' : {
        return {
          ...state,
          error: action.error
        };
      }  
      default:
        return state;
    }
  
  }
  