import React from "react";

function AddTransactionForm() {
  // const [addFormData, newFormData] = useState({
  //   date: "",
  //   description: "",
  //   category: "",
  //   amount: 0,
  // })

  // function handleChange(e) {
  //   newFormData({ ...addFormData, [e.target.name]: e.target.value })
  // }
  // //prevent submission default
  // function handleSubmit(e) {
  //   e.preventDefault()
  //   onSubmision(addFormData)
  // }
  return (
    <div className='ui segment'>
      <form className='ui form'>
        <div className='inline fields'>
          <input type='date' name='date' />
          <input type='text' name='description' placeholder='Description' />
          <input type='text' name='category' placeholder='Category' />
          <input type='number' name='amount' placeholder='Amount' step='0.01' />
        </div>
        <button className='ui button' type='submit'>
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;