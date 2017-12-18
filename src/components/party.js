import React from "react";
import { Form } from "semantic-ui-react";
const url = "http://localhost:3001/api/v1/";


class Party extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      course_type: '',
      price: '',
      description: '',
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
        <h2>Add Party</h2>
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
          <Form.Group widths="12">
            <Form.Input
              name="course_type"
              onChange={this.handleChange}
              label="Course Type"
              type="text"
              placeholder="Course Type"
            />
            </Form.Group>
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

          <Form.Button>Submit</Form.Button>
        </Form>

      </div>
    );
  }
}
export default Party;
