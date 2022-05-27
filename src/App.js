import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Settings from "./components/Setting";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import State from "./components/State";
import City from "./components/City";
import cityjson from "./city.json";
import Form from "./components/Form/Form";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
function App() {
  const showMenu = () => {
    console.log("hello");
    document.querySelector(".nav-bar").style.display !== "block"
      ? (document.querySelector(".nav-bar").style.display = "block")
      : (document.querySelector(".nav-bar").style.display = "none");
  };
  const state = [
    {
      name: "Province1",
      cities: ["biratnagar", "itahari", "dharan"],
    },
    {
      name: "Madesh Pradesh",
      cities: ["birgunj", "janakpur", "kalaliya"],
    },
    {
      name: "Bagmati",
      cities: ["kathmandu", "bharatpur", "lalitpur"],
    },
    {
      name: "Gandaki",
      cities: ["pokhara", "vyas", "kawasoti"],
    },
    {
      name: "Lumbini",
      cities: ["gorahi", "tulsipur", "nepalgunj"],
    },
    {
      name: "Karnali",
      cities: ["birendranagar", "gurbhakot", "dullu"],
    },
    {
      name: "Sudurpashchim",
      cities: ["dhangadhi", "bhimdatta", "ghodaghodi"],
    },
  ];
  const [city, changeCityData] = useState(cityjson);
  const cities = state.map((st) => {
    return st.cities;
  });
  const [login, setlogin] = useState({});
  const [signUp, setsignUp] = useState({});
  return (
    <div className="App">
      <button className="mobile-nav" onClick={() => showMenu()}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <Nav state={state} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:state" element={<State state={state} />} />
        <Route
          path="/:state/:city"
          element={
            <City state={state} changeCity={changeCityData} city={city} />
          }
        />
        <Route path="/form" element={<Form />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Login signup={true} />} />
      </Routes>
    </div>
  );
}

export default App;
