import { useState } from 'react';
import './App.css'
import CityComponent from './modules/CityComponent';
import WeatherComponent from './modules/WeatherComponent'
import Axios from 'axios'
import styled from 'styled-components'

const Container= styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-items: center;
  min-width: 350px;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  background-color: #fff;
`

function App() {
  const [city, setCity] = useState()
  const [weather, setWeather] = useState()

  const fetchWeather = async (e) => {
      e.preventDefault();
      const response = await Axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`,
      );
      setWeather(response.data);
    };

  return (
    <Container>
      <header className="appLabel">react weather app</header>
      {
        city && weather ?
        <WeatherComponent weather={weather}/>:
        <CityComponent updateCity={setCity} fetchWeather={fetchWeather}/>

      }

    </Container>
  );
}

export default App;
//12f74f69e83dcfc7b24e809d67289ded