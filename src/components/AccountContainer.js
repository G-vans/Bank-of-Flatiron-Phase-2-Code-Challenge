import React, { useState, useEffect } from 'react';
import AddTransactionForm from './AddTransactionForm';
import TransactionsList from './TransactionsList';
import Search from './Search';


function AccountContainer({ handleOnSearch }) {
  const [transacs, listTransaction] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8001/transactions')
      .then((response) => response.json())
      .then((transacs) => listTransaction(transacs));
  }, []);


  function handleOnSearch(search) {
    listTransaction(transactions => transactions.filter(transaction => transaction.description.includes(search)))
  }

  return (
    <div>
      <Search onSearch={handleOnSearch} />
      <AddTransactionForm />
      <TransactionsList />
      

    </div>
  );
}

export default AccountContainer;