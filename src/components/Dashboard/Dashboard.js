import React, { Component } from 'react';
import Controls from '../Controls/Controls';
import Balance from '../Balance/Balance';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Dashboard.module.css';
import uuidv1 from 'uuid/v1';

const date = () => {
  const year = Math.floor(Math.random() * (2019 - 2011) + 2011);
  const month = Math.floor(Math.random() * 12 + 1);
  const day = Math.floor(Math.random() * 30 + 1);
  const newDate = new Date(year, month, day);
  return newDate.getTime().toLocaleString();
};

export default class Dashboard extends Component {
  state = {
    transactions: [],
    balance: 0,
    deposit: 0,
    withdrawal: 0,
  };

  handleChange = e => {
    const name = e.target.name;
    const amount = e.target.value;

    if (name === 'Deposit') {
      if (amount !== '' || amount > 0) {
        this.setState(({ transactions, balance, deposit, withdrawal }) => {
          return {
            transactions: [
              ...transactions,
              this.transactionsHistory(name, amount),
            ],
            balance: balance + amount,
            deposit: deposit + amount,
            withdrawal: withdrawal,
          };
        });
      } else {
        toast.info('Введите сумму для проведения операции!');
      }
    } else if (name === 'Withdrawal') {
      if (amount < this.state.balance) {
        this.setState(({ transactions, balance, deposit, withdrawal }) => {
          return {
            transactions: [
              ...transactions,
              this.transactionsHistory(name, amount),
            ],
            balance: balance - amount,
            deposit: deposit,
            withdrawal: withdrawal + amount,
          };
        });
      } else {
        toast.info('На счету недостаточно средств для проведения операции!');
      }
    }
  };

  transactionsHistory(buttonType, amount) {
    const newOperation = {
      type: buttonType,
      id: uuidv1.generate(),
      amount: amount,
      date: date(),
    };
    return newOperation;
  }

  render() {
    const { transactions, balance, deposit, withdrawal } = this.state;
    return (
      <div className={styles.dashboard}>
        <Controls
          onDeposit={this.handleChange}
          onWithdraw={this.handleChange}
        />
        <Balance balance={balance} income={deposit} expenses={withdrawal} />
        <TransactionHistory transactions={transactions} />
        <ToastContainer />
      </div>
    );
  }
}
