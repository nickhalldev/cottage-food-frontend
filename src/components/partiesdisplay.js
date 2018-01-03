import React from 'react';
import * as actions from "../actions/index"
import { connect } from 'react-redux'
import { withRouter, NavLink } from "react-router-dom"




const MyParties = (props) => {
  let bakerVariable = props.baker_transactions ? (
        <div>
        <h1>Baker Transactions</h1>

          {props.baker_transactions.map((transact, index) =>{
            // let transaction_participant =
            const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
            const date = new Date(transact.delivery_date_time);
             const options = {
               hour12: true,
               weekday: "long",
               year: "numeric",
               month: "long",
               day: "numeric",
               hour: "numeric",
               minute: "numeric"
             };
             {date.toLocaleString("en-US", options)}
            return <div key={index}>
            {index+1}. You will be delivering goods to  {transact.purchaser_id} on {monthNames[date.getMonth()]}  {date.getDate()}, {date.getFullYear()} at {date.getHours()}:{date.getMinutes()} coming to a total cost of ${transact.total_cost}. Click
            <NavLink to={`/transactions/${transact.id}`}> here </NavLink>
            to edit your order.

            </div>
          })}

        </div>
    ) : null

    let purchaserVariable = props.purchaser_transactions ? (
          <div>
            <h1>Purchaser Transactions</h1>
            {props.purchaser_transactions.map((transact, index) =>{
              const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
              const date = new Date(transact.delivery_date_time);
               const options = {
                 hour12: true,
                 weekday: "long",
                 year: "numeric",
                 month: "long",
                 day: "numeric",
                 hour: "numeric",
                 minute: "numeric"
               };
               {date.toLocaleString("en-US", options)}
              return <div key={index}>
              {index+1}. <NavLink to={`/baker/${transact.id}`}> {transact.baker_id} </NavLink> will be delivering goods on {monthNames[date.getMonth()]}  {date.getDate()}, {date.getFullYear()} at {date.getHours()}:{date.getMinutes()} at a total cost of ${transact.total_cost}. Click
              <NavLink to={`/transactions/${transact.id}`}> here </NavLink>
               to edit your order.
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
console.log('state so I can see users payload',state)
  return {
    baker_transactions: state.users.current_user.baker_transactions,
    purchaser_transactions: state.users.current_user.purchaser_transactions,
    users: state.users.users
  }
}


export default withRouter(connect(mapStateToProps, actions)(MyParties))
