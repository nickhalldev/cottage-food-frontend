import {
  SET_USER,
  LOGOUT,
  SET_USERS,
} from "../actions/types"

const defaultState = { current_user: {current_user: {}}, users: {} }

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

     case SET_USERS:

       return{
         ...state,
         users: action.payload
     }

    default:

    return state;
  }



}
