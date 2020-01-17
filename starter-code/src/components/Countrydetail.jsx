import React from "react";
import countries from "../countries.json"
import { Link } from "react-router-dom"
import axios from 'axios';


export default function Countrydetail(props) {

    
  return (
    <div class="col-7">
      <h1>France </h1>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td id="capital">Capital</td>
            <td>Paris {props.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              551695 {props.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>

                {countries.map((country) => 
                    <li>
                        <Link to={country.cca3}>{country.borders}</Link>
                    </li>
                )}
                <li>
                  <a href="/AND">Andorra</a>
                </li>
                <li>
                  <a href="/BEL">Belgium</a>
                </li>
                <li>
                  <a href="/DEU">Germany</a>
                </li>
                <li>
                  <a href="/ITA">Italy</a>
                </li>
                <li>
                  <a href="/LUX">Luxembourg</a>
                </li>
                <li>
                  <a href="/MCO">Monaco</a>
                </li>
                <li>
                  <a href="/ESP">Spain</a>
                </li>
                <li>
                  <a href="/CHE">Switzerland</a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
