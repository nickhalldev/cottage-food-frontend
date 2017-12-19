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
  };

  render() {
    return (
      <div>
        <h2>Log in</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="12">
            <Form.Input
              name="username"
              onChange={this.handleChange}
              label="Username"
              placeholder="username"
            />
          </Form.Group>
          <Form.Group widths="12">
            <Form.Input
              name="password"
              onChange={this.handleChange}
              label="Password"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
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
