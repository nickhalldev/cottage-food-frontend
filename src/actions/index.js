import { LOGIN_USER, LOGIN_ERROR } from './types';
import { login } from '../api/index.js'


export function loginUser(user_params, history) {
  return function (dispatch){
  login(user_params)
    .then(data => {
      if (data.error){
        console.log('error');
        return null
      } else {
        localStorage.setItem("token", data["jwt"]);
        dispatch({ type: LOGIN_USER, payload: data })
        history.push("/profile")
      }
    })
  }
}
