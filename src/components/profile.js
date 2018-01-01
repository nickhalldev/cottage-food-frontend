import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import * as actions from "../actions/index"

var titleize = require('titleize')

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }



  displayUser = () => {
    console.log(this.props.current_user.current_user)
    if (this.props.current_user.current_user) {
      return ( <div>
        <br />
        <h3>Hey {titleize(this.props.current_user.current_user.firstname)} {titleize(this.props.current_user.current_user.lastname)}!</h3>
        <h5>Welcome back to Cottage, where you can buy or sell home baked meals to other locals.</h5>


        </div>
      )
    }
  }

    render(){
      return(
        <div>
        {this.displayUser()}
        <br />
        </div>
      )
    }

  }

  const mapStateToProps = state => {
    return {
      current_user: state.users.current_user
    }
  }

export default withRouter(connect(mapStateToProps, actions)(Profile))
