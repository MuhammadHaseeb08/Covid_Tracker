import React, { useEffect, useRef, useState } from "react";
import M from "materialize-css";
import axios from "axios";
// import "./Countryname.css"
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
  Bar,
} from "recharts";

export default function () {
  let [CountryData, setCountryData] = useState([]);
  let [countryName, setcountryName] = useState("");
  let [countryCovid, setcountryCovid] = useState({});
  let select = useRef();
  useEffect(() => {
    let CountriesNameData = async () => {
      let resp = await axios.get("https://covid19.mathdro.id/api/countries");

      setCountryData(resp.data.countries);
      M.FormSelect.init(select.current, {});
    };

    CountriesNameData();
  }, []);

  let dt = [
    {
      name: "Cases",
      Cases: countryCovid.Cases,
    },
    {
      name: "Recovered",
      Recovered: countryCovid.Recovered,
    },
    {
      name: "Deaths",
      Deaths: countryCovid.Deaths,
    },
  ];

  let url = "https://covid19.mathdro.id/api/countries";
  const handleChange = async (event) => {
    console.log(event.target.value);
    setcountryName(event.target.value);
    console.log(countryName);
    let response = await axios.get(`${url}/${event.target.value}`);
    console.log(response.data);
    setcountryCovid({
      Cases: response.data.confirmed.value,
      Recovered: response.data.recovered.value,
      Deaths: response.data.deaths.value,
    });
  };

  return (
    <div>
      <div class="input-field col s12">
        <select ref={select} onChange={handleChange}>
          <option disabled selected>
            Choose your option
          </option>
          <option value="option1">Option 1</option>

          {CountryData.map((country, index) => {
            return (
              <option value={country.name} key={index}>
                {country.name}
              </option>
            );
          })}
        </select>
        <label>Select your country</label>
      </div>

      <div className="heading">
        <h2 style={{color : "grey"}}>
          <i>{countryName}</i>
        </h2>
      </div>
      <div id="hs">
        {Object.keys(countryCovid).map((count, index) => {
          return (
            <div className="container" key={index}>
              <h4 style={{color : "grey"}}>
                <i>{count}</i>
              </h4>
              <h5>
                <i> {countryCovid[count]}</i>
              </h5>
            </div>
          );
        })}
      </div>
      <div>
        <ResponsiveContainer width="85%" aspect={1} height="0%">
          <BarChart
            width="20%"
            height="20%"
            margin={{ top: 400, left: 30, right: 30, bottom: 30 }}
            data={dt}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Bar dataKey="Cases" fill="Green" />
            <Bar dataKey="Recovered" fill="Blue" />
            <Bar dataKey="Deaths" fill="red" />
          </BarChart>
        </ResponsiveContainer>
       
       
       {/* <ResponsiveContainer width="90%" aspect={1} height="0%" >
<LineChart   width="20%"
            height="40%"
            margin={{ top: 400, left: 30, right: 30, bottom: 30 }}
            data={dt} >
              <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Cases" stroke="Green" />
    <Line type="monotone" dataKey="Recovered" stroke="Blue" />
    <Line type="monotone" dataKey="Deaths" stroke="red" />



</LineChart>

       </ResponsiveContainer> */}
      </div>
    </div>
  );
}
