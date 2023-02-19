import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { getForecast } from "../utils/getWeather"
import { getLocations } from "../utils/helpers"
import Search from "../components/home/Search.jsx"
import WeatherIcon from "../components/view/WeatherIcon"
import Header from "../components/common/Header.jsx"
import Footer from "../components/common/Footer"
import HomeButton from "../components/common/HomeButton"
import TempButton from "../components/common/TempButton.jsx"
import LocationCard from "../components/common/LocationCard.jsx"
import CssBaseline from "@mui/material/CssBaseline"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"

const View = () => {
  let { state } = useLocation()
  const [error, setError] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [weather, setWeather] = useState(null)
  const time = new Date().getHours()

  useEffect(() => {
    async function fetchData() {
      setError(null)
      const location = state.location.loc
      const { forecast, current, error } = await getForecast(location)
      if (error) {
        setError("Failed to fetch data.")
        return
      }
      setForecast(forecast)
      setWeather(current)
    }
    fetchData()
  }, [])

  return (
    <>
      <CssBaseline />
      <main>
        {/* Header */}
        <Header />
        <Container
          sx={{
            py: 8,
            minHeight: "100vh",
          }}
          maxWidth="md"
        >
          <Box
            sx={{
              py: 3,
            }}
            maxWidth="md"
          >
            {/* Temp icon */}
            <TempButton />
            {/* HomeButton */}
            <HomeButton />
          </Box>
          {/* location card */}
          {state ? <LocationCard location={state?.location} /> : null}
          {/* Weather forecast */}
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              my: 5,
              px: 5,
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                {/* Weather icons */}
                {forecast
                  ? forecast?.forecastday[0].hour
                      .filter(
                        (weather, hour) => hour > time - 1 && hour - time < 5
                      )
                      .map((weather, hour) => (
                        <WeatherIcon
                          time={`${time + hour + 1}:00`}
                          weatherType={weather.condition.text}
                          icon={weather.condition.icon}
                          temp_c={weather.temp_c}
                          temp_f={weather.temp_f}
                          key={hour}
                        />
                      ))
                  : null}
              </Box>
            </CardContent>
          </Card>
        </Container>
      </main>
      {/* Footer */}
      <Footer />
    </>
  )
}
export default View
