import React from "react";

const SearchForm = (props) => {
  const { submitHandler, symbol, changeHandler, amountChange, amount } = props;
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="search"></label>
      <input
        type="text"
        name="search"
        placeholder="Type to search"
        value={symbol}
        onChange={changeHandler}
      />
      <br />
      <label htmlFor="amount"></label>
      <input
        type="number"
        name="amount"
        placeholder="Days to show"
        value={amount}
        onChange={amountChange}
      />
      <br />
      <button>Search</button>
    </form>
  );
};

export default SearchForm;
