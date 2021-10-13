import React, { useState , useEffect } from 'react';
import './TempApp.css';

const TempApp = () =>{

  const [city, setCity] = useState(null);
  const [search, setSearch] = useState('Kolkata');

  useEffect(() => {
  const Api = async () =>{
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=0002b60350ebf57bb894819b6599ccd8`;
    const res = await fetch (url);
    const resJson = await res.json();
    console.log(resJson);

    setCity(resJson.main);
   
  }
  Api()
  }, [search]);

  return(
    <>
    <div className="container">
      <div className="imput-feild">
        <input type="search" className="input-data" placeholder='Enter the name of City' onChange={(event) => {setSearch(event.target.value)}} />
      </div>
     { !city ? (
      <div>
         <p className ='par'>NO CITY AVILIBLE</p>
       <p>You Have entered a city which does'nt Exist</p>
      </div>
     ) : (
       <div>
         <h2 className='name'>Created By Rupesh Pathak</h2>
      <div className="data">
      <h2>City: {search}</h2>
      <h2>Temperature: {city.temp} Celsius</h2>
      <h5>Max: {city.temp_max} || Min: {city.temp_min}</h5>
    </div>
    </div>
     )}
    </div>
    </>
  )
}

export default TempApp;