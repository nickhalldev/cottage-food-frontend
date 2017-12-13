import React from "react";
import { Form } from "semantic-ui-react";
const url = "http://localhost:3001/api/v1/";

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

  static currentUser () {
    return fetch(`${url}/current_user`, {
      headers: {'content-type': 'application/json',
      'accept': 'application/json',
      'Authorization': localStorage.getItem('jwt')}
    }).then(res => res.json())

  }



  handleSubmit = e => {
    e.preventDefault();
  
    const body = this.state;

    fetch(`${url}auth`, {
      method: "POST",
      headers: {'content-type': 'application/json',
      'accept': 'application/json',
      'Authorization': `Token ${localStorage.getItem('jwt')}`},
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(json => {
        if (!json.error) {
          localStorage.setItem("token", json.jwt);

        }
      }
    )
    ;
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
export default Login;
