import React from 'react';
import PropTypes from 'prop-types';
import styles from './Balance.module.css';

const Balance = (balance, income, expenses) => {
  return (
    <section className={styles.balance}>
      <span className={styles.income}>
        <span>⬆</span>
        {income}
      </span>
      <span className={styles.expenses}>
        <span>⬇</span>
        {expenses}
      </span>
      <span className={styles.amount}>Balance: {balance}</span>
    </section>
  );
};

Balance.propTypes = {
  income: PropTypes.number.isRequired,
  expenses: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired,
};

export default Balance;
