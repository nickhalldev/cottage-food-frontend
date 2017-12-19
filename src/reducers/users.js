import {
  SET_USER,
} from "../actions/types"

const defaultState = { current_user: {} }

export default function users(state = defaultState, action){
  switch(action.type){
    case SET_USER:
     return {
      ...state,
      current_user: action.payload.user
     }

    default:

    return state;
  }

}
