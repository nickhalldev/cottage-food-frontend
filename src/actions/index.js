import { SET_USER, LOGOUT } from './types';
import { login, fetchUser, fetchUserData } from '../api/index.js'


export function loginUser(user_params, history) {
  return function (dispatch){
  login(user_params)
    .then(data => {
      if (data.error){
        console.log('error');
        return null
      } else {
        localStorage.setItem("token", data["jwt"]);
        dispatch(fetchingAllUserData(data.user.id))
      }
    })
  }
}

export function fetchingUser(){
  return function(dispatch){
    fetchUser()
    .then(data => {
      if (data.error){
        console.log('error');
        return null
      } else {

        dispatch(fetchingAllUserData(data))
      }
    })
  }
}

export function fetchingAllUserData(user_id){
  return function(dispatch){
    fetchUserData(user_id)
    .then(data => {
      if (data.error){
        console.log('error');//add error handling later
        return null
      } else {
        dispatch({ type: SET_USER, payload: data })
        // history.push("/profile")
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
