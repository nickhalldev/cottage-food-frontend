import React from "react";
import { connect } from 'react-redux'
import * as actions from "../actions/index"
import { Form } from "semantic-ui-react";

import { withRouter, } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => {

    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.loginUser(this.state, this.props.history)
    this.props.history.push('/profile')
  };

  render() {
    return (
      <div className="login">
        <h1>Log in</h1>
        <Form onSubmit={this.handleSubmit}>
          <h3><Form.Group>
            <Form.Input
              name="username"
              onChange={this.handleChange}
              label="Username"
              placeholder="Username"
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              name="password"
              onChange={this.handleChange}
              label="Password"
              type="password"
              placeholder="Password"
            />
          </Form.Group></h3>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}



const mapStateToProps = state => {
  return {
    current_user: state.user
  }
}



export default withRouter(connect(mapStateToProps, actions)(Login));
