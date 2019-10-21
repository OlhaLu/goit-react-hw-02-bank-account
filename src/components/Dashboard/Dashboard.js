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
  const newDate = new Date(year, month, day).toLocaleString('en-US');
  return newDate;
};

export default class Dashboard extends Component {
  state = {
    transactions: [],
    balance: 0,
  };

  handleChangeDeposit = e => {
    const amount = Number(e.target.parentElement.firstElementChild.value);
      if (amount === '' || amount > 0) {
        this.setState(({ transactions, balance }) => {
          const newOperation = {
            type: 'deposit',
            id: uuidv1(),
            amount: amount,
            date: date(),
          };
          return {
            transactions: [...transactions, newOperation],
            balance: balance + amount,
          };
        });
      } else {
        toast.info('Введите сумму для проведения операции!');
      }
    }

  handleChangeWithdrawl = e => {
    const amount = Number(e.target.parentElement.firstElementChild.value);

      if (amount <= 0) {
          toast.error('Некорректно введена сумма! Невозможно провести операцию!');
        } else if (amount <= this.state.balance ) {
            const newOperation = {
                type: 'withdrawal',
                id: uuidv1(),
                amount: amount,
                date: date(),
        };
        this.setState(({ transactions, balance }) => {
          return {
              transactions: [...transactions, newOperation],
              balance: balance - amount,
          };
        });
      } else {
        toast.warn('На счету недостаточно средств для проведения операции!');
      }
    }

  render() {
    const { transactions, balance } = this.state;

    const deposit = [...transactions].reduce((acc, item) => {
      if (item.type === 'deposit') {
        return acc + item.amount;
      }
      return acc;
    }, 0);
    const withdrawal = [...transactions].reduce((acc, item) => {
      if (item.type === 'withdrawal') {
        return acc + item.amount;
      }
      return acc;
    }, 0);

    return (
      <div className={styles.dashboard}>
        <Controls
          onDeposit={this.handleChangeDeposit}
          onWithdraw={this.handleChangeWithdrawl}
        />
        <Balance balance={balance} income={deposit} expenses={withdrawal}/>
        <TransactionHistory transactions={transactions} />
        <ToastContainer />
      </div>
    );
  }
  }

