import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import { Form } from "semantic-ui-react";
import * as actions from "../actions/index"


const url = "http://localhost:3001/api/v1/"

class RecipeShow extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      name: '',
      course_type: '',
      price: 0,
      description: '',
    }
  }

componentDidMount(){
  let recipe_id = this.props.match.params.id
  if(recipe_id){
  this.fetchRecipe(recipe_id)
  }
}

fetchRecipe = (recipe_id) => {
  fetch(`${url}recipes/${recipe_id}`)
  .then(res => res.json())
  .then(res =>
    this.setState({
    name: res.recipe.name,
    course_type: res.recipe.course_type,
    price: res.recipe.price,
    description: res.recipe.description,
  })
  )
}

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

handleSubmit = () => {
  let recipe_id = this.props.match.params.id

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };
  const body = this.state;
  fetch(`${url}recipes/${recipe_id}`, {
    method: "PATCH",
    headers,
    body: JSON.stringify(body)
  })
  .then(res => {
    this.props.fetchingAllUserData(this.props.user_id)
    this.props.history.push('/myrecipes')
  })
};

// deleteRecipe = () => {
//   console.log('delete this recipe!')
// }

render(){

return(
  <div>

    <Form onSubmit={this.handleSubmit}>
      <h3><Form.Group>
        <Form.Input
          name="name"
          onChange={this.handleChange}
          label="Course Name"
          type="text"
          placeholder={this.state.name}
          value={this.state.name}
        />
        </Form.Group>

        <Form.Group>
          <Form.Input
            name="price"
            onChange={this.handleChange}
            label="Price"
            placeholder={this.state.price}
            value={this.state.price}
          />
        </Form.Group>

        <Form.Group >
          <Form.Input
            name="description"
            onChange={this.handleChange}
            label="Description"
            type='text'
            placeholder={this.state.description}
            value={this.state.description}
            className="description-box"
          />
        </Form.Group></h3>

        <Form.Button>Submit Recipe Edits</Form.Button>
      </Form>




  </div>
  )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.users,
    current_user: state.users.current_user.current_user,
    user_id: state.users.current_user.current_user.id

  }
}

export default withRouter(connect(mapStateToProps, actions)(RecipeShow))
