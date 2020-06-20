import React from 'react';
import './Transactions.css';

const Transaction=({props})=>{
    return(
        props.map(prop=>(
        <tr>
            <td>{prop.type}</td>
            <td>{prop.amount}</td>
            <td>{prop.currency}</td>
        </tr>
        ))
    )
}

const TransactionHistory = ({props})=>{
    return(
        <table className="TransactionHistory">
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                <Transaction props={props}/>
            </tbody>
        </table>
    )
}
export default TransactionHistory;