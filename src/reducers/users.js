import {
  LOGIN_USER,
  LOGIN_ERROR
} from "../actions/types"

const defaultState = { current_user: {} }

export default function users(state = defaultState, action){
  switch(action.type){
    case LOGIN_USER:
     return {
      ...state,
      current_user: action.payload.user
     }
    default:

    return state;
  }

}
