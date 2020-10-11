import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Axios from "axios";
import apiKey from "./api_keys";
import styled from "styled-components";
import DailyStockHistoryical from "./components/DailyStockHistorical";
import SearchForm from "./components/SearchForm";

const FlexyyBoi = styled.div`
  display: flex;
  width: 100vw;
  flex-flow: row wrap;
  justify-content: space-around;
`;

function App() {
  const [stock, setStock] = useState([]);
  const [symbol, setSymbol] = useState("");
  const [search, setSearch] = useState("");
  const [amountToDisplay, setAmountToDisplay] = useState(5);
  const [amount, setAmount] = useState();

  useEffect(() => {
    Axios.get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`
    )
      .then((res) => {
        console.log(res.data);
        setStock(Object.entries(res.data["Time Series (Daily)"]));
        setAmountToDisplay(amount);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, [search]);

  const changeHandler = (e) => {
    setSymbol(e.target.value);
  };
  const amountChange = (e) => {
    setAmount(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setSearch(symbol.toUpperCase());
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          {search === "" ? "Search for some stock data" : search.toUpperCase()}
        </h1>
        <Switch>
          <Route path="/daily">
            <SearchForm
              submitHandler={submitHandler}
              symbol={symbol}
              changeHandler={changeHandler}
              amountChange={amountChange}
              amount={amount}
            />
            <FlexyyBoi>
              {stock.slice(0, amountToDisplay).map((item) => (
                <DailyStockHistoryical item={item} key={item[0]} />
              ))}
            </FlexyyBoi>
          </Route>
          <Route path="/">
            <Link to="/daily">
              <SearchForm
                submitHandler={submitHandler}
                symbol={symbol}
                changeHandler={changeHandler}
                amountChange={amountChange}
                amount={amount}
              />
            </Link>
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
