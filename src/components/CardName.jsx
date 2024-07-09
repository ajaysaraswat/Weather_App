
import React, { useContext } from 'react'
import { WeatherContext } from '../context/weather';
const CardName = () => {
  const weather = useContext(WeatherContext);
   

  return (
    <div className='card'>
        <img src={weather.data?.current?.condition?.icon}></img>
        <h2>{weather?.data?.current?.temp_c}</h2>
        <h5>{weather?.data?.location?.region} , {weather?.data?.location?.name}</h5>
    </div>
  )
}

export default CardName;