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

  useEffect(() => {
    async function fetchData() {
      setError(null)
      const data = await getLocations()
      const forecast = await getForecast(data.map((el) => el.loc))
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
                <WeatherIcon
                  time={"11.00"}
                  weatherType={"cloudy"}
                  temperature={"7"}
                />
                <WeatherIcon
                  time={"12.00"}
                  weatherType={"sunny"}
                  temperature={"8"}
                />
                <WeatherIcon
                  time={"13.00"}
                  weatherType={"partly cloudy"}
                  temperature={"9"}
                />
                <WeatherIcon
                  time={"14.00"}
                  weatherType={"rainy"}
                  temperature={"10"}
                />
                <WeatherIcon
                  time={"15.00"}
                  weatherType={"sunny"}
                  temperature={"11"}
                />
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
