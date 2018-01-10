import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"
import Datetime from 'react-datetime';
import moment from "moment"
import { Form } from "semantic-ui-react";
import * as actions from "../actions/index"



const url = "http://localhost:3001/api/v1/"

class TransactionShow extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      eventDateTime: moment(),
      totalCost: 0,
    }
  }

componentDidMount(){
  let transaction_id = this.props.match.params.id
  if(transaction_id){
  this.fetchTransaction(transaction_id)
  }
}

fetchTransaction = (transaction_id) => {
  fetch(`${url}transacts/${transaction_id}`)
  .then(res => res.json())
  .then(res =>
    this.setState({
    totalCost: res.total_cost,
    eventDateTime: res.delivery_date_time
    })
  )
}

handleDateChange = (event) => {
  this.setState({
    eventDateTime: event._d
  })
}

handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

handleSubmit = () => {
  let transaction_id = this.props.match.params.id

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };
  const body = {
    total_cost: this.state.totalCost,
    delivery_date_time: this.state.eventDateTime,
  }
  fetch(`${url}transacts/${transaction_id}`, {
    method: "PATCH",
    headers,
    body: JSON.stringify(body)
})
  .then(res => {
    this.props.fetchingAllUserData(this.props.user_id)
    this.props.history.push('/myparties')
  })
};

deleteRecipe = () => {
  let transaction_id = this.props.match.params.id

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };

  fetch(`${url}transacts/${transaction_id}`, {
    method: "DELETE",
    headers,
    body: JSON.stringify({

    })
  }).then(res => {
    this.props.fetchingAllUserData(this.props.user_id)
    this.props.history.push('/myparties')
  })
}



render(){

return(
  <div>

  <Form onSubmit={this.handleSubmit}>
    <Form.Group widths="12">
      <Form.Input
        name="totalCost"
        onChange={this.handleChange}
        label="Cost"
        type="text"
        placeholder={this.state.totalCost}
        value={this.state.totalCost}
      />
      </Form.Group>
      <div className='map-width-fix'>
      Date and Delivery Time
      <Datetime
      onChange={this.handleDateChange}
  

      />
      </div>
      <br />
      <Form.Button>Submit Transaction Edits</Form.Button>
    </Form>

    <br />
    <Form onSubmit={this.deleteRecipe}>
      <Form.Button>Delete Transaction</Form.Button>
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

export default withRouter(connect(mapStateToProps, actions)(TransactionShow))
