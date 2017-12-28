import React from "react";
import { Form } from "semantic-ui-react";
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"

const url = "http://localhost:3001/api/v1/";

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course_type: '',
      price: '',
      description: '',
      image: '',
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = () => {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    const body = this.state;
    fetch(`${url}recipes`, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    })
    ;
  };

  render() {
    return (
      <div>
        <h2>Add Recipe</h2>
        <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="12">
          <Form.Input
            name="name"
            onChange={this.handleChange}
            label="Name"
            type="text"
            placeholder="Name"
          />
          </Form.Group>
        Course Type
        <select id='' name='course_type' onChange={this.handleDropdownChange}>
          <option name="appetizer" value="appetizer">Appetizer</option>
          <option name="entree" value="entree">Entree</option>
          <option name="side" value="side">Side</option>
          <option name="dessert" value="dessert">Dessert</option>
          </select>

          <Form.Group widths="12">
            <Form.Input
              name="price"
              onChange={this.handleChange}
              label="price"
              placeholder="price"
            />
          </Form.Group>
          <Form.Group widths="12">
            <Form.Input
              name="description"
              onChange={this.handleChange}
              label="Description"
              type='text'
              placeholder="description"
            />
          </Form.Group>
          <Form.Group widths="12">
            <Form.Input
              name="image"
              onChange={this.handleChange}
              label="Image"
              type='text'
              placeholder="image"
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
    current_user: state.users,
  }
}

export default withRouter(connect(mapStateToProps, null)(Recipe))
