import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = (onChange, onDeposit, onWithdraw) => {
  return (
    <section className={styles.controls}>
      <input
        className={styles.input}
        type="number"
        name="amount"
        onChange={onChange}
      />
      <button className={styles.button} type="button" onClick={onDeposit}>
        Deposit
      </button>
      <button className={styles.button} type="button" onClick={onWithdraw}>
        Withdraw
      </button>
    </section>
  );
};

Controls.propTypes = {
  onChange: PropTypes.func.isRequired,
  onDeposit: PropTypes.func.isRequired,
  onWithdraw: PropTypes.number.isRequired,
};

export default Controls;
