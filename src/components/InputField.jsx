import React, { useContext } from 'react'
import { WeatherContext } from '../context/weather'
const InputField = (props) => {
  const {city,setCity}  =useContext(WeatherContext);

  
  const handlesearchcity=(event)=>{
    setCity(event.target.value);
  }
  return (
    <input className='input-field' value={city} onChange={handlesearchcity} placeholder='search here...'></input>
  )
}

export default InputField