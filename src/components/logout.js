import React from 'react';
import * as actions from "../actions/index"
import { connect } from 'react-redux'
import { withRouter,  NavLink } from "react-router-dom";
const LogoutButton = (props) => {
 // console.log(props)
    return(
      <div>
      <NavLink to='/login'>
        <button onClick={props.logout} className='ui inverted violet button opacity'>
          Logout
        </button>
      </NavLink>
      </div>

  )

}

export default withRouter(connect(null, actions)(LogoutButton))
