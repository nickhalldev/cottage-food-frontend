import React from 'react';
import * as actions from "../actions/index"
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"

const MyParties = () => {
  return(
    <div>

    Hi Hi partiessssss!

    </div>
  )

}

const mapStateToProps = state => {
  // console.log('state.user in map state',state)
  return {
    current_user: state.users.current_user
  }
}


export default withRouter(connect(mapStateToProps, actions)(MyParties))
