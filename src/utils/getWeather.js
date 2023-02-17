import axios from "axios"

export const getWeather = async (locations) => {
  try {
    const apiKey = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY
    const requests = locations.map((location) => {
      const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`
      return axios.get(url)
    })
    const responses = await Promise.all(requests)
    const weather = responses.map((response, index) => {
      const location = locations[index]
      const weather = response.data.current
      return { location, weather }
    })
    return weather
  } catch (error) {
    return { error: error.message }
    console.log(`getWeather Error: ${error}`)
  }
}

export const getForecast = async (location) => {
  try {
    const apiKey = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY
    const requests = locations.map((location) => {
      const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`
      return axios.get(url)
    })
    const responses = await Promise.all(requests)
    const weather = responses.map((response, index) => {
      const location = locations[index]
      const weather = response.data.current
      return { location, weather }
    })
    return weather
  } catch (error) {
    return { error: error.message }
    console.log(`getWeather Error: ${error}`)
  }
}
