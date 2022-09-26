import React from 'react';
import AccountContainer from './AccountContainer';

function App() {
  function handleOnSearch(search, setTransactions) {
    setTransactions((transactions) => {
      transactions.filter((transaction) =>
        transaction.description.includes(search)
      );
    });
  }

  // //POST request
  // function updateOnSubmission(transaction) {
  //   const serverOptions = {
  //     method: "POST",
  //     headers: {
  //       "content-Type": "applicatiom/json"
  //     },
  //     body:JSON.stringify(transaction)
  //   }

  //   fetch('http://localhost:8001/transactions', serverOptions)
  //     .then(res => res.json())
  //     .then(newTransacs => listTransactions(transactions => [...transactions, newTransacs]))
  //     .catch(err=>console(err))
  // }

  return (
    <div className='ui raised segment'>
      <div className='ui segment violet inverted'>
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      {/* <AddTransactionForm onSubmission={updateOnSubmission} /> */}
      <AccountContainer handleSearch={handleOnSearch} />
    </div>
  );
}

export default App;