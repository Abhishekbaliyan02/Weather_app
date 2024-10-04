import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

const[search,setSearch]=useState('');
  const[data,setData]=useState();
  


  let getcity = (e) =>{
    
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=1f163f079a0ee57fdeec4cdcc98da998&units=metric`)
        .then((res)=>res.data)
        .then((final_response)=>{
          if(final_response.cod=="404"){
            setData(undefined)
          }
          else{

            setData(final_response)
          }
        });
        
    
    e.preventDefault();

    setSearch('');
  }

  console.log(data);

 

  return (
    <div className='weather-app'>
    <div className="search_container">
      <h1>Weather App</h1>
      <form action="" onSubmit={getcity}>
      <input type="text" placeholder='Enter city name' onChange={(e)=>setSearch(e.target.value)} value={search}/>
      <button><i class="fa-solid fa-magnifying-glass"></i></button>
      </form>
    </div>

{
  data!==undefined
  ?
<>
<div className="items">
      <h2>{data.main.temp}<sup>o</sup>C</h2>
      <h4>{data.name} <span>{data.sys.country}</span></h4>
      <img src={`https://api.openweathermap.org/img/w/${data.weather[0].icon}.png` } alt="noimage" />
      <p>{data.weather[0].main}</p>
      <div className="left">
      <p><i class="fa-solid fa-water"></i>{data.main.humidity}</p>
      <h4>Humidity</h4>
      </div>
      <div className="right">
      <p><i class="fa-solid fa-wind"></i>{data.wind.speed} km/h</p>
      <h4>Wind speed</h4>
      </div>
    </div>
</>
  :

  <div><h6>No Data</h6></div>
}

    
    </div>
  );
}

export default App;
