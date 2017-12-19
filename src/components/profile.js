import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import * as actions from "../actions/index"
import Navbar from './navbar'



class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {


    };
  }

    render(){
      return(
        <div>
        <Navbar />

        <br />
  

        </div>
      )
    }

  }

  const mapStateToProps = state => {
    // console.log('state.user in map state',state)
    return {
      current_user: state.users.current_user
    }
  }

export default withRouter(connect(mapStateToProps, actions)(Profile))
