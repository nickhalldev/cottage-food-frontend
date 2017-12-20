import {
  SET_USER,
  LOGOUT,
} from "../actions/types"

const defaultState = { current_user: {} }

export default function users(state = defaultState, action){
  switch(action.type){
    case SET_USER:
     return {
      ...state,
      current_user: action.payload
     }

     case LOGOUT:
     return {
       ...state,
       current_user: {}
     }

    default:

    return state;
  }



}
