import React from 'react';
import * as actions from "../actions/index"
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"

const MyParties = (props) => {

  let bakerVariable = props.baker_transactions ? (
        <div>
        <h1>Baker Transactions</h1>
          {props.baker_transactions.map((transact, index) =>{
            return <div key={index}>
            Delivery Date {transact.delivery_date}
            Delivery Time {transact.delivery_time}
            Total Cost {transact.total_cost}</div>
          })}
        </div>
    ) : null

    let purchaserVariable = props.purchaser_transactions ? (
          <div>
            <h1>Purchaser Transactions</h1>
            {props.purchaser_transactions.map((transact, index) =>{
              return <div key={index}>
              Delivery Date {transact.delivery_date}
              Delivery Time {transact.delivery_time}
              Total Cost {transact.total_cost}
              </div>
            })}
          </div>
      ) : null

  return(
    <div>

  {bakerVariable}
  {purchaserVariable}

    </div>
  )

}

const mapStateToProps = state => {
   console.log('state.user in map state',state)
  return {
    baker_transactions: state.users.current_user.baker_transactions,
    purchaser_transactions: state.users.current_user.purchaser_transactions
  }
}


export default withRouter(connect(mapStateToProps, actions)(MyParties))
