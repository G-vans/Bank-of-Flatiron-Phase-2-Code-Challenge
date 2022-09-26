import React, { useEffect, useState } from 'react';
import Transaction from './Transaction';

function TransactionsList() {

  //fetch data
  //GET request
  const [transactions, listTransactions] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8001/transactions')
      .then((response) => response.json())
      .then((transacs) => listTransactions(transacs))
      .catch((err) => console.log(err));
  }, []);

  


  return (
    <table className='ui celled striped padded table'>
      <tbody>
        <tr>
        {/* <th>
            <h3 className="ui center aligned header">#Ref</h3>
          </th> */}
          <th>
            <h3 className='ui center aligned header'>Date</h3>
          </th>
          <th>
            <h3 className='ui center aligned header'>Description</h3>
          </th>
          <th>
            <h3 className='ui center aligned header'>Category</h3>
          </th>
          <th>
            <h3 className='ui center aligned header'>Amount</h3>
          </th>
        </tr>
        {/* render a list of <Transaction> components here */}
        {transactions.map((transaction) => {
          return (
            <Transaction
            date={transaction.date}
            description={transaction.description}
            category={transaction.category}
            amount={transaction.amount}
            key={transaction.id}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default TransactionsList;