import { SET_USER, LOGOUT } from './types';
import { login, fetchUser } from '../api/index.js'


export function loginUser(user_params, history) {
  console.log('printing user params, then history',user_params, history)

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
  // console.log('printing user params, then history',user_params, history)
  return function(dispatch){
    fetchUser()
    .then(data => {
      if (data.error){
        console.log('error');
        return null
      } else {

        // localStorage.setItem("token", data["jwt"]);
        dispatch({ type: SET_USER, payload: data })
        // console.log('data in fetching user',data)
      }
    })
  }
}

export function logout(){
  localStorage.clear()
  return {
    type: LOGOUT
  }
}
