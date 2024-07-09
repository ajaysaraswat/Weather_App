import { createContext, useState } from "react";
import { getWeatherDataForCity, getWeatherDataForLocation} from "../api/Index";



export const WeatherContext = createContext(0);

export const WeatherProvider=(props)=>{
    const [data,setData] = useState(0);
    const [city , setCity] = useState();
    const fetchData = async() =>{
        const responce =await getWeatherDataForCity(city);
        setData(responce);
       
    }

    const fetchDataForCurrentLoaction=()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            getWeatherDataForLocation(position.coords.latitude,position.coords.longitude).then((data)=>setData(data));
        })
    }
    return (
<WeatherContext.Provider value={{city,data,setCity,fetchData,fetchDataForCurrentLoaction}}>
    {props.children}
</WeatherContext.Provider>
    )

};

