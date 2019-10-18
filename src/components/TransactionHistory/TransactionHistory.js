import React from 'react';
import PropTypes from 'prop-types';

const TransactionHistory = ( items ) => {
    return (
<table class="history">
    <thead>
      <tr>
        <th>Transaction</th>
        <th>Amount</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      <tr className={items.id}>
        <td>{items.type}</td>
        <td>{items.amount}$</td>
        <td>{items.date}</td>
      </tr>
      <tr className={items.id}>
        <td>{items.type}</td>
        <td>{items.amount}$</td>
        <td>{items.date}</td>
      </tr>
    </tbody>
  </table>

    )
}
TransactionHistory.propTypes = {
    items: PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.number.isRequired,
    })
  };


export default TransactionHistory;