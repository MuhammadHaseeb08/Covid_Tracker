import React, { useEffect, useState } from "react";
// import { Chart } from "chart.js";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  BarChart,
  Tooltip,
      Bar
} from "recharts";
import "./mainPanal.css";
import axios from "axios";
// import { Chart } from "chart.js";
export default function MainPanal() {
  // let pdata = [
  //   { name1: "haseeb", num: 5, fee: 10 },
  //   { name1: "asad", num: 2, fee: 5 },
  //   { name1: "fiaz", num: 10, fee: 15 },
  //   { name1: "gc", num: 15, fee: 2 },
  // ];


  let [fullData, setfullData] = useState({});
  let dt= [
    {
      name:"Cases",
      Cases:fullData.Cases
    },
    {
      name:"Recovered",
      Recovered:fullData.Recovered,
    },
     {
      name:"Deaths",
      Deaths:fullData.Deaths,
    },
  ]
  let keys=Object.keys(fullData)
  console.log(keys);
  useEffect(() => {
    async function createData() {
      let realData = await axios.get("https://covid19.mathdro.id/api");

      setfullData({
        Cases: realData.data.confirmed.value,
        Recovered: realData.data.recovered.value,
        Deaths: realData.data.deaths.value,
      });

      // console.log(fullData);
    }

    createData();
  }, []);

  return (
    <div>
      <div id="heading">
        <h2>
          <i>Global Data</i>
        </h2>
      </div>
      <div id="container">
        {Object.keys(fullData).map((key) => {
          return (
            <div className="child">
              <h4>
                <i>{key}</i>
              </h4>
              <h5>{fullData[key]}</h5>
            </div>
          );
        })}
      </div>
      <div>
        <div>
          {/* <ResponsiveContainer width="90%" aspect={1} height="0%">
            <LineChart
              data={pdata}
              width="40%"
              height="40%"
              margin={{ top: 400, left: 30, right: 30, bottom: 30 }}
            >
              <XAxis dataKey="name1" />
              <YAxis />
              <CartesianGrid strokeDasharray={"3 3"}></CartesianGrid>
              <Legend />
              <Line dataKey="num" stroke="red" />
              <Line dataKey="fee" />
            </LineChart>
          </ResponsiveContainer> */}
          {/* <ResponsiveContainer width="90%" aspect={1} height="0%">
            <LineChart  data={dt}
              width="100%"
              height="40%"
              margin={{ top: 400, left: 30, bottom: 30 }} >
                <XAxis dataKey="name"
                 
                />
                <YAxis />
                <Line dataKey="value"stroke="red" />
              </LineChart>
          </ResponsiveContainer > */}

<ResponsiveContainer width="90%" aspect={1} height="0%">
<BarChart  width="40%"
              height="40%"
              margin={{ top: 400, left: 30, right: 30, bottom: 30 }} data={dt}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  {/* <Bar dataKey="Global_Data" fill="#8884d8" /> */}
  {/* <Bar dataKey="value" fill="#82ca9d" /> */}
  <Bar dataKey="Cases" fill="Green" />
            <Bar dataKey="Recovered" fill="Blue" />
            <Bar dataKey="Deaths" fill="red" />
</BarChart>
</ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

// async function loadData() {
//   // weather.innerHTML=""
//   // let resp= await   axios.get("https://covid19.mathdro.id/api/countries")
//   // console.log(resp.data)
//   let realData = await fetch("https://covid19.mathdro.id/api");
//   // console.log(data);
//   // let daily=  await axios.get ('https://covid19.mathdro.id/api/daily/2-14-2020'
//   // )
//   // console.log(daily);
//   //  let usa= await  axios.get("https://covid19.mathdro.id/api/countries/USA")
//   //  console.log(usa);
//   // setglobalState(realData.data)
//   // console.log(globalState);
// }
