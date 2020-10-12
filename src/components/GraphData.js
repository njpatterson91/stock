import React from "react";
import Trend from "react-trend";

const GraphData = (props) => {
  const { data } = props;
  const makeTheTrendGraph = (data) => {
    let trendData = [];
    data.forEach((item) => {
      trendData.push(parseFloat(item[1]["1. open"]));
    });
    return trendData;
  };

  const trendData = makeTheTrendGraph(data);
  const dataToMap = trendData.slice(0, 10);
  console.log("trending data", trendData);

  console.log("test", data);
  return (
    <Trend
      smooth
      data={trendData}
      gradient={["#00c6ff", "#F0F", "#FF0"]}
      radius={10}
      strokeWidth={2}
      strokeLinecap={"butt"}
    />
  );
};

export default GraphData;
