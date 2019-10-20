import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionsHistory.module.css';

const TransactionsHistory = ({ transactions }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.head}>
        <tr className={styles.title}>
          <th>Transaction</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody className={styles.transactions_body}>
        <tr className={transactions.id}>
          <td>{transactions.type}</td>
          <td>{transactions.amount}$</td>
          <td>{transactions.date}</td>
        </tr>
        <tr className={transactions.id}>
          <td>{transactions.type}</td>
          <td>{transactions.amount}$</td>
          <td>{transactions.date}</td>
        </tr>
      </tbody>
    </table>
  );
};
TransactionsHistory.propTypes = {
  transactions: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    date: PropTypes.number.isRequired,
  }),
};

export default TransactionsHistory;
