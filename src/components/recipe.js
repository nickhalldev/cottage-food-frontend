import React from "react";
import { Form } from "semantic-ui-react";
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import * as actions from "../actions/index"


const url = "http://localhost:3001/api/v1/";

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course_type: '',
      price: '',
      description: '',
      // image: '',
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleDropdownChange = (e) => {
    this.setState({
        course_type: e.target.value
    })
  };

  handleSubmit = () => {

    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    const body = {body: this.state, user_id: this.props.user_id};

    fetch(`${url}recipes`, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    }).then(res => {
      this.props.fetchingAllUserData(this.props.user_id)
      this.props.history.push('/myrecipes')
    })
  };

  render() {

    return (
      <div>
    
        <h2>Add Recipe</h2>
        <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Input
            name="name"
            onChange={this.handleChange}
            label="Course Name"
            type="text"
            placeholder="Course Name"
          />
          </Form.Group>
        Course Type

        <div className="select-box">
          <select onChange={this.handleDropdownChange}>
            <option name="appetizer" value="appetizer">Appetizer</option>
            <option name="entree" value="entree">Entree</option>
            <option name="side" value="side">Side</option>
            <option name="dessert" value="dessert">Dessert</option>
          </select>
        </div>
        <br />
          <Form.Group>
            <Form.Input
              name="price"
              onChange={this.handleChange}
              label="Price"
              placeholder="Price"
            />
          </Form.Group>
          <Form.Group className="ui fluid icon input">
            <Form.Input
              name="description"
              onChange={this.handleChange}
              label="Description"
              type='text'
              placeholder="Description"
              className="description-box"
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
    user_id: state.users.current_user.current_user.id
  }
}

export default withRouter(connect(mapStateToProps, actions)(Recipe))
