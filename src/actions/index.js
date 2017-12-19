import { SET_USER } from './types';
import { login, fetchUser } from '../api/index.js'


export function loginUser(user_params, history) {
  return function (dispatch){
  login(user_params)
    .then(data => {
      if (data.error){
        console.log('error');
        return null
      } else {
        localStorage.setItem("token", data["jwt"]);
        dispatch({ type: SET_USER, payload: data })
        history.push("/profile")
      }
    })

  }
}

export function fetchingUser(){
  return function(dispatch){
    fetchUser()
    .then(data => {
      console.log(data)
    })
  }
}
