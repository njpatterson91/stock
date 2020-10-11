import React from "react";
import styled from "styled-components";

const DailyDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  background-color: grey;
  justify-content: space-around;
  max-width: 30%;
  border-radius: 10px;
  text-align: left;
  padding: 5%;
  margin: 3%;
`;

const DailyStockHistorical = (props) => {
  const { item } = props;
  return (
    <DailyDiv>
      <div>
        <h3>Date: {item[0]}</h3>
        <hr />
        <p>Open: {item[1]["1. open"]}</p>
        <p>High: {item[1]["2. high"]}</p>
        <p>Low: {item[1]["3. low"]}</p>
        <p>Close: {item[1]["4. close"]}</p>
        <p>Volume: {item[1]["5. volume"]}</p>
      </div>
    </DailyDiv>
  );
};

export default DailyStockHistorical;
