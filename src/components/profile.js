import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import * as actions from "../actions/index"

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    console.log(this.props.current_user.lastname)
  }

  displayVariable = () => {
    if (this.props.current_user.username) {
      return ( <div>
        Hey {this.props.current_user.firstname} {this.props.current_user.lastname}!
        </div>
      )
    }
  }

    render(){
      return(
        <div>
        {this.displayVariable()}
        <br />
        </div>
      )
    }

  }

  const mapStateToProps = state => {
    console.log(state)
    console.log(state.users.current_user.firstname)
    return {
      current_user: state.users.current_user
    }
  }

export default withRouter(connect(mapStateToProps, actions)(Profile))
