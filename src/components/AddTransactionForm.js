import React, { useState } from "react";


function AddTransactionForm({ onSubmision }) {

  const [addFormData, newFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: 0,
  })

  function handleChange(e) {
    newFormData({ ...addFormData, [e.target.name]: e.target.value })
  }
  //prevent submission default
  function handleSubmit(e) {
    e.preventDefault()
    onSubmision(addFormData)
  }
  return (
    <div className="ui segment">
      <form onSubmit={handleSubmit} onChange={handleChange} className="ui form">
        <div className="inline fields">
          <input value={addFormData.date} type="date" name="date" />
          <input value={addFormData.description} type="text" name="description" placeholder="Description" />
          <input value={addFormData.category} type="text" name="category" placeholder="Category" />
          <input value={addFormData.amount} type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
