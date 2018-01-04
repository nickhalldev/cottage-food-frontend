import React from 'react';
import * as actions from "../actions/index"
import { connect } from 'react-redux'
import { withRouter, NavLink } from "react-router-dom"




const MyParties = (props) => {
  let bakerVariable = props.baker_transactions ? (
        <div>
        <h1>Don&#39;t forget to make these deliveries.</h1>

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
            {index+1}. You&#39;re delivering to {transact.purchaser_name} on {monthNames[date.getMonth()]}  {date.getDate()}, {date.getFullYear()} at {date.getHours()}:{date.getMinutes()} and will get ${transact.total_cost}. Click
            <NavLink to={`/transactions/${transact.id}`}> here </NavLink>
            to edit their order.

            </div>
          })}

        </div>
    ) : null

    let purchaserVariable = props.purchaser_transactions ? (
          <div>
            <h1>These deliveries are coming your way soon.</h1>
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
              {index+1}. <NavLink to={`/baker/${transact.baker_id}`}> {transact.baker_name} </NavLink> will be delivering goods on {monthNames[date.getMonth()]}  {date.getDate()}, {date.getFullYear()} at {date.getHours()}:{date.getMinutes()} for ${transact.total_cost}. Click
              <NavLink to={`/transactions/${transact.id}`}> here </NavLink>
               to edit your order.
              </div>
            })}
          </div>
      ) : null

  return(
    <div>

  <h3>{bakerVariable}</h3>
  <br />
  <h3>{purchaserVariable}</h3>

    </div>
  )

}

const mapStateToProps = state => {
  return {
    baker_transactions: state.users.current_user.baker_transactions,
    purchaser_transactions: state.users.current_user.purchaser_transactions,
    users: state.users.users
  }
}


export default withRouter(connect(mapStateToProps, actions)(MyParties))
