import React, { Component } from 'react';
import Controls from '../Controls/Controls';
// import Balance from '../Balance/Balance';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import uuid from 'uuid';

export default class Dashboard extends Component {
    state = {
        transactions: [],
        balance: 0,
      };

      onChange = e => {
        this.setState({ value: e.target.value });
        };
    
        onClick = e => {
            const { amount , balance } = this.state;
            if (amount  === 0) {
             toast("Введите сумму для проведения операции!");
            } else if (e.target.name === 'Withdraw' && amount  > balance) {
                toast("На счету недостаточно средств для проведения операции!");
            } else {
                const date = new Date().toLocaleString();
                this.setState(
                  {
                    type: e.target.name,
                    id: uuid.generate(),
                    amount,
                    date,
                  },
                ) 
                } 
            }


      render () {
          return (
            <div className="dashboard">
            <Controls
            onChange={this.onChange}
            onDeposit={this.onClick}
            onWithdraw={this.onClick}
            />
            {/* <Balance

            /> */}
            <ToastContainer />
            </div>
          )
      }
      
}