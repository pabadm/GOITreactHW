import React from 'react';
import './Transactions.css';
import PropTypes from 'prop-types';

const Transaction=({type,amount,currency})=>{
    return(
        <tr>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    )
}
Transaction.propTypes={
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,  
}

const TransactionHistory = ({items})=>{
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
                {items.map(item =>(
                    <Transaction key={item.id}
                    type={item.type}
                    amount={item.amount}
                    currency={item.currency}
                    />
                ))}
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.array,
}
export default TransactionHistory;