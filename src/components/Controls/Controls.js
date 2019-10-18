import React from 'react';
import PropTypes from 'prop-types';

const Controls = (onChange, onDeposit, onWithdraw) => {
    return (
        <section class="controls">
        <input type="number" name="amount" onChange={onChange} />
        <button type="button" onClick={onDeposit}>Deposit</button>
        <button type="button" onClick={onWithdraw}>Withdraw</button>
      </section>
    
    )
}

Controls.propTypes = {
  onChange: PropTypes.func.isRequired,
  onDeposit: PropTypes.func.isRequired,
  onWithdraw: PropTypes.number.isRequired,
}

export default Controls;

