import React, { Component } from 'react';
import Controls from '../Controls/Controls';
import Balance from '../Balance/Balance';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Dashboard.module.css';
import uuidv1 from 'uuid/v1';

export default class Dashboard extends Component {
  state = {
    transactions: [],
    balance: {
      deposit: 0,
      withdrawal: 0,
      balance: 0,
    },
  };

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  onClick = e => {
    const { amount, balance } = this.state;
    if (amount === 0) {
      toast('Введите сумму для проведения операции!');
    } else if (e.target.name === 'Withdraw' && amount > balance) {
      toast('На счету недостаточно средств для проведения операции!');
    } else {
      const date = new Date().toLocaleString();
      return this.setState({
        type: e.target.name,
        id: uuidv1.generate(),
        amount,
        date,
      });
    }
  };

  totalBalance() {
    const { transactions } = this.state;

    const total = transactions.reduce(
      (acc, transaction) => {
        return {
          ...acc,
          [transaction.type]: acc[transaction.type] + transaction.amount,
        };
      },
      {
        deposit: 0,
        withdrawal: 0,
      },
    );
    total.balance = total.deposit - total.withdrawal;
    return total;
  }

  render() {
    const { total, deposit, withdrawal, transactions } = this.state;
    return (
      <div className={styles.dashboard}>
        <Controls
          onChange={this.onChange}
          onDeposit={this.onClick}
          onWithdraw={this.onClick}
        />
        <Balance income={deposit} expenses={withdrawal} balance={total} />
        <TransactionHistory transactions={transactions} />
        <ToastContainer />
      </div>
    );
  }
}
