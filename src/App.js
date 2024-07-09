import React, { useContext, useEffect } from 'react'
import './App.css'
import CardName from './components/CardName';
import InputField from './components/InputField'
import Button from './components/Button'
import { WeatherContext } from './context/weather';


const App = () => {
  
  const { fetchData,city ,fetchDataForCurrentLoaction,setCity} = useContext(WeatherContext);
  const handleOnClick=()=>{
   fetchData(city);
  }

  useEffect(()=>{
    //get current location here
    fetchDataForCurrentLoaction();
    
  },[])

  const handleRefresh = ()=>{
    fetchDataForCurrentLoaction();
    setCity("");
  }
  return (
    
    <div className='center'>
      <h1>Weather Forecast</h1>
      <InputField></InputField>
      <Button value="Search" onClick={handleOnClick}></Button>

      <CardName></CardName>
     
      <Button value="Refresh" onClick={handleRefresh}></Button>
    </div>
  )
}

export default App