import {
  SET_USER,
  LOGOUT,
  SET_USERS,
  SET_USERS_FOR_TRANSACTIONS,
} from "../actions/types"

const defaultState = { current_user: {current_user: {}}, users: {}, transaction_users: {} }

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

     case SET_USERS_FOR_TRANSACTIONS:
     // console.log(action.payload)
     // let user_data_map = action.payload.{
     //
     // }
     return{
       ...state,
       transaction_users: action.payload
     }

    default:

    return state;
  }



}
