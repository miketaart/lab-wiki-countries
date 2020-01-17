import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom"
import Countrydetail from "./components/Countrydetail.jsx"
import { Switch, Route } from "react-router-dom";
import countries from "./countries.json";


function App() {
  return (
    <div className="App">

    
      <div>
        <nav class="navbar navbar-dark bg-primary mb-3">
          <div class="container">
            <a class="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>


        <div class="container">
          <div class="row">
            <div class="col-5" className="items">
              <div class="list-group">
               
               {countries.map((country) =>
                <Link
                  class="list-group-item list-group-item-action active"
                  to={country.cca3}
                >
                {country.flag} {country.name.common}
                </Link>
               )}
                

              </div>
            </div>
            <Countrydetail
            capital={countries.capital}
            area={countries.area}
            borders={countries.borders}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
