import axios from 'axios'
import { useCallback, useState, useEffect } from 'react'
import Details from "./components/bottom-details"
import Quote from "./components/quote"
import Weather from "./components/weather"

const fetchWeatherData = (city) => {
  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY
  if (!apiKey) {
    throw new Error("Missing OpenWeather API key. Set VITE_OPENWEATHER_API_KEY in .env.local.")
  }

  return axios.get(
    'https://api.openweathermap.org/data/2.5/weather',
    { params: { q: city, appid: apiKey } }
  ).then((response) => response.data)
}

function App() {
  const [city, setCity] = useState("chennai")
  const [deg, setDeg] = useState(0)
  const [main, setMain] = useState("")
  const [feellike, setFeellike] = useState("")
  const [humidity, setHumidity] = useState("")
  const [wind, setWind] = useState("")
  const [long, setLong] = useState("")
  const [lat, setLat] = useState("")
  const [vis, setVis] = useState("")
  const [pressure, setPressure] = useState("")
  const [clouds, setClouds] = useState("")
  const [loading, setLoading] = useState(true)
  const [hasWeather, setHasWeather] = useState(false)
  const [cityNotFound, setCityNotFound] = useState(false)
  const [error, setError] = useState(null)
  const applyWeatherData = useCallback((data) => {
    setDeg(data.main.temp)
    setMain(data.weather[0].main)
    setFeellike(data.main.feels_like)
    setHumidity(data.main.humidity)
    setWind(data.wind.speed)
    setLong(data.coord.lon)
    setLat(data.coord.lat)
    setVis(data.visibility)
    setPressure(data.main.pressure)
    setClouds(data.clouds.all)
    setHasWeather(true)
  }, [])

  const handleFetchError = useCallback((error) => {
    if (error.response?.status === 404) {
      setCityNotFound(true)
    } else if (error.message.startsWith("Missing OpenWeather API key.")) {
      setError(error.message)
    } else {
      console.error(error)
      setError("An error occurred while fetching weather data.")
    }
  }, [])

  const fetchWeather = useCallback((searchCity) => {
    fetchWeatherData(searchCity)
      .then(applyWeatherData)
      .catch(handleFetchError)
      .finally(() => setLoading(false))
  }, [applyWeatherData, handleFetchError])

  const handleSearch = () => {
    const searchCity = city.trim()
    if (searchCity) {
      setLoading(true)
      setError(null)
      setCityNotFound(false)
      fetchWeather(searchCity)
    }
  }

  const handleKeydown = (event) => {
    if (event.key === "Enter") {
      handleSearch()
    }
  }

  useEffect(() => {
    fetchWeatherData("chennai")
      .then(applyWeatherData)
      .catch(handleFetchError)
      .finally(() => setLoading(false))
  }, [applyWeatherData, handleFetchError])

  return (
    <>
      {hasWeather && !cityNotFound && !error &&
        <main className={`weather-page${loading ? " is-refreshing" : ""}`} aria-busy={loading}>
          <Weather city={city} setCity={setCity} handleKeydown={handleKeydown} handleSearch={handleSearch} deg={deg}
            main={main} feellike={feellike} humidity={humidity} wind={wind} long={long}
            lat={lat} />
          <Details feellike={feellike} vis={vis} pressure={pressure} clouds={clouds} />
          <Quote />
        </main>
      }
      {loading && <div className={hasWeather ? "refresh-loading" : "loading"} role="status">
        <span className="loading-spinner" aria-hidden="true">⟳</span>
        {hasWeather ? "Updating weather..." : "Loading weather..."}
      </div>}
      {cityNotFound && <div className='cityNotFound'>Invalid City Name</div>}
      {error && <div className='error'>{error}</div>}
    </>
  )
}

export default App
