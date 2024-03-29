import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

export default class Controls extends Component {
  static propTypes = {
    onDeposit: PropTypes.func.isRequired,
    onWithdraw: PropTypes.func.isRequired,
  }

  state = {
    value: '',
  };

  handleValue = ({ target }) => {
    const value = target.value;
    this.setState({ value: Number(value) });
  };

  handleDeposit = () => {
    this.props.onDeposit(this.state.value);
    this.reset();
  };

  handleWithdraw = () => {
    this.props.onWithdraw(this.state.value);
    this.reset();
  };

  reset = () => {
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <section className={styles.controls}>
        <input className={styles.input} 
        type="number" 
        name="amount" 
        value={value} 
        onChange={this.handleValue} />
        <button className={styles.button} 
        type="button" 
        onClick={this.handleDeposit}>
          Deposit
        </button>
        <button className={styles.button} 
        type="button" 
        onClick={this.handleWithdraw}>
          Withdraw
        </button>
      </section>
    );
}
}
