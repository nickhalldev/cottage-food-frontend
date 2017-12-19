import {
  SET_USER,
  LOGOUT,
} from "../actions/types"

const defaultState = { current_user: {} }

export default function users(state = defaultState, action){
  // console.log('action.payload.user in set user area',action.payload)
  switch(action.type){
    case SET_USER:
    // console.log("SET USER", action.payload)
     return {
      ...state,
      current_user: action.payload.current_user
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
