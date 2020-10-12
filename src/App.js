import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Axios from "axios";
import apiKey from "./api_keys";
import styled from "styled-components";
import DailyStockHistoryical from "./components/DailyStockHistorical";
import SearchForm from "./components/SearchForm";
import GraphData from "./components/GraphData";
import { useHistory } from "react-router-dom";
import DetailedGraph from "./components/DetailedGraph";

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

  let history = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();
    setSearch(symbol.toUpperCase());
    history.push("/daily");
  };

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  console.log(stock);

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

            <GraphData data={stock} />
            <DetailedGraph stock={stock} />

            <FlexyyBoi>
              {stock.slice(0, amountToDisplay).map((item) => (
                <DailyStockHistoryical item={item} key={item[0]} />
              ))}
            </FlexyyBoi>
          </Route>
          <Route path="/">
            <SearchForm
              submitHandler={submitHandler}
              symbol={symbol}
              changeHandler={changeHandler}
              amountChange={amountChange}
              amount={amount}
            />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
