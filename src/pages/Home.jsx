import { useState, useEffect } from "react"
import { getWeather } from "../utils/getWeather"
import { getLocations } from "../utils/helpers"
import Header from "../components/common/Header.jsx"
import Footer from "../components/common/Footer"
import TempButton from "../components/common/TempButton.jsx"
import Search from "../components/home/Search.jsx"
import LocationCard from "../components/Home/LocationCard.jsx"

import CssBaseline from "@mui/material/CssBaseline"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"

const Home = () => {
  const [locations, setLocations] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      setError(null)
      const data = await getLocations()
      const weather = await getWeather(data.map((el) => el.loc))
      if (weather.error) {
        setError("Failed to fetch data.")
        return
      }
      setLocations(
        data.map((el, i) => ({
          ...el,
          weather: weather[i].weather,
        }))
      )
    }
    fetchData()
  }, [])

  return (
    <>
      <CssBaseline />
      <main>
        {/* Header */}
        <Header />
        <Container sx={{ py: 8, minHeight: "100vh" }} maxWidth="md">
          {/* Temp icon */}
          <TempButton />
          {/* Search bar */}
          <Search setLocations={setLocations} locations={locations} />
          {/* Cards container */}
          <Grid container spacing={4}>
            {locations.map((location) => (
              <Grid item key={location?.loc} xs={6} sm={6} md={4}>
                <LocationCard location={location} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Footer />
    </>
  )
}
export default Home
