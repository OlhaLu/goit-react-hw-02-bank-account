import React from 'react';
import PropTypes from 'prop-types';

const Balance = (balance, income, expenses) => {
    return (
<section className="balance">
    <span className={income}><span>⬆</span>{income}</span>
    <span className={expenses}><span>⬇</span>{expenses}</span>
    <span className={balance}>Balance: {income - expenses}</span>
  </section>
    )
}

Balance.propTypes = {
  onChange: PropTypes.number.isRequired,
  onDeposit: PropTypes.number.isRequired,
  onWithdraw: PropTypes.number.isRequired,
}

export default Balance;