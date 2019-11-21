import {credentials, user as users} from '../db'
export const  getUsers = ()=>dispatch=>{
    dispatch({
        type: 'USERS_LIST',
        users: users,
      });
};
export const  login =(email,password,cb) =>dispatch=>{
    if(credentials.username===email && credentials.password=== password){
    localStorage.setItem('auth_token',true)
    cb(true)
    dispatch({
        type: 'USER_LOGIN',
        UserLogin: true,
      });
    }
    else dispatch({
        type: 'SET_ERROR',
        error: true,
    })
} 