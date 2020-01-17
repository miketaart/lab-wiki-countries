import React, { Component } from "react";
import "./App.css";
import Countrydetail from "./components/Countrydetail.jsx"
import { Switch, Route, Link } from "react-router-dom";
import countries from "./countries.json";
import axios from 'axios';

class App extends Component {

  constructor(){
        super()
        this.state = {
            countries: []
        }
    }

  componentDidMount() {
        axios.get("https://countries.tech-savvy.tech/countries")
        .then(response => {
            this.setState({countries: response.data})
        })
    }

  render(){
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
               
               {this.state.countries.map((country) =>
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
            capital={this.state.countries.capital}
            area={this.state.countries.area}
            borders={this.state.countries.borders}
            />
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
