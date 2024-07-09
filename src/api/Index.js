const baseURL =" https://api.weatherapi.com/v1/current.json?key=d81a109bca464fc6893103603240807"
export const getWeatherDataForCity=async(city)=>{
const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
return await response.json();

}

export const getWeatherDataForLocation=async(lat,log)=>{
    const response = await fetch(`${baseURL}&q=${lat},${log}&aqi=yes`);
    return await response.json();
    
    }
// https://api.weatherapi.com/v1/current.json?key=d81a109bca464fc6893103603240807&q=London&aqi=no