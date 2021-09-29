import React from 'react'



export const WeatherIcons = {
    "01d": "/icons/sunny.svg",
    "01n": "/icons/night.svg",
    "02d": "/icons/day.svg",
    "02n": "/icons/cloudy-night.svg",
    "03d": "/icons/cloudy.svg",
    "03n": "/icons/cloudy.svg",
    "04d": "/icons/perfect-day.svg",
    "04n": "/icons/cloudy-night.svg",
    "09d": "/icons/rain.svg",
    "09n": "/icons/rain-night.svg",
    "10d": "/icons/rain.svg",
    "10n": "/icons/rain-night.svg",
    "11d": "/icons/storm.svg",
    "11n": "/icons/storm.svg",
    "13d":"/icons/snow.svg",
    "13n":"/icons/snow.svg",
    "50d":"/icons/mist.svg",
    "50n":"/icons/mist.svg"
  };

export const WeatherInfoIcons = {
    sunset: "/icons/temp.svg",
    sunrise: "/icons/temp.svg",
    humidity: "/icons/humidity.svg",
    wind: "/icons/wind.svg",
    pressure: "/icons/pressure.svg",
};

function WeatherComponent({weather}) {

    const WeatherInfoComponent=({name,value})=>{
        return(
            <div className="infocontainer">
                <img src={WeatherInfoIcons[name]} alt="" className="infoicon" />
                <span className="infolabel">
                    {value}
                    <span>{name}</span>
                </span>
            </div>
        )
    }
    const isDay=weather.weather[0].icon.includes('d');
    
    const getTime=(timeStamp)=>{
        return(
            `${new Date(timeStamp*1000).getHours()}:${new Date(timeStamp*1000).getMinutes()}`
        )
    }
    return(
        <>
            <div className="weathercomponent">
                <span className="condition"> <span>{Math.round(weather.main.temp -273.15)} C</span> | {weather.weather[0].description}</span>
                <img src={WeatherIcons[weather.weather[0].icon]} alt="clouds" className="clouds_w" />
                
            </div>
            <span className="location">
                {`${weather.name},${weather.sys.country}`}
            </span>
            <hr />
            <span className="weatherinfolabel">Weather Info</span>
            <div className="WeatherInfoContainer">
                <WeatherInfoComponent 
                    name={ isDay ? 'sunset':'sunrise'} 
                    value={getTime(weather.sys[isDay ? 'sunset':'sunrise'])}
                />
                <WeatherInfoComponent name="humidity" value={weather?.main?.humidity}/>
                <WeatherInfoComponent name="wind" value={weather?.wind?.speed}/>
                <WeatherInfoComponent name="pressure" value={weather?.main?.pressure} />
            </div>
            
        </>
    )
}

export default WeatherComponent
