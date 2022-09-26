
import React, { useEffect, useState } from "react";
import AddTransactionForm from "./AddTransactionForm";
import AccountContainer from "./AccountContainer";
import Search from "./Search";
import Transaction from "./Transaction";



function App() {
  //fetch data
  //GET request
  const [transactions, listTransactions] = useState([])
  useEffect(() => {
    fetch('http://localhost:8001/transactions')
      .then(res => res.json())
      .then(transacs => listTransactions(transacs))
  }, [])

  //POST request
  function updateOnSubmission(transaction) {
    const serverOptions = {
      method: "POST",
      headers: {
        "content-Type": "applicatiom/json"
      },
      body:JSON.stringify(transaction)
    }

    fetch('http://localhost:8001/transactions', serverOptions)
      .then(res => res.json())
      .then(newTransacs => listTransactions(transactions => [...transactions, newTransacs]))
      .catch(err=>console(err))
  }

  function handleOnSearch(search){
    listTransactions(transactions=>transactions.filter(transaction=>transaction.description.includes(search)))
  }
  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <Search onSearch={handleOnSearch} />
      <AddTransactionForm onSubmission={updateOnSubmission} />
      <Transaction transactions={transactions} />
      <AccountContainer />

    </div>
  );
}

export default App;
