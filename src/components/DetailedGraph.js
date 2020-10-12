import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const DetailedGraph = (props) => {
  const { stock } = props;
  console.log("testing things yo ", stock[0]);
  const arrayForGraph = (stock) => {
    let arrayToReturn = [];
    for (let i = 0; i < stock.length; i++) {
      arrayToReturn.push({
        name: stock[i][0],
        open: parseFloat(stock[i][1]["1. open"]),
        close: parseFloat(stock[i][1]["2. high"]),
      });
    }
    return arrayToReturn;
  };

  const beforeSplice = arrayForGraph(stock);
  const graphData = beforeSplice.splice(0, 25);
  console.log("is this the graph data i need", graphData);

  return (
    <LineChart
      width={1200}
      height={300}
      data={graphData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        style={{
          fontSize: "10px",
          fontColor: "black",
        }}
        dataKey="name"
      />
      <YAxis />
      <Tooltip cursor={{ fill: "rgba(0, 0, 0, 0.6)" }} />
      <Legend />
      <Line
        type="monotone"
        dataKey="open"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="close" stroke="#82ca9d" />
    </LineChart>
  );
};

export default DetailedGraph;
