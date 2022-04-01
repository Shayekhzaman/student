import React, { useEffect, useState } from "react";
import "./Capital.css";

const Capital = () => {
  const [country, setCountry] = useState([]);

//   const loadCountries = () => {
//     fetch("https://restcountries.com/v2/all")
//       .then((res) => res.json())
//       .then((data) => {
        
//       });
//   };
    

//   loadCountries();
// console.log(country);

const apiGet = () => {
  fetch("https://restcountries.com/v2/all")
  .then((res) => res.json())
  .then((data) =>{
    console.log(data)
    setCountry(data);
  })
  
}

useEffect (() => {
  apiGet();
}, [])
 
  return (
    <div id="capitalBody">
      <h1>Country Information</h1> <br />
      {/* <button onClick={apiGet}>Fetch Api</button> */}
      <br />
      {/* <pre> {JSON.stringify(country, null, 2)}</pre> */}
      <div>
       
        <div id="countryDetails">
          {
            country.map(item => 
              <h2 id="country"><span class="element">Country:</span>{item.name},<br /> <span class="element">Capital:</span>{ item.capital}, <br /> <span class="element">Population:</span>{ item.population}, <br /> <span class="element">Region:</span> {item.region}  </h2>,
              // <h4>{item.capital}</h4>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Capital;
