import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import { TextField } from "@mui/material"
import { useState } from "react"
import { getWeather } from "../../utils/getWeather"
import { addLocation } from "../../utils/helpers"

const Search = ({ setLocations, locations }) => {
  const [error, setError] = useState(null)
  const [input, setInput] = useState("")

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handlePressEnter = async (e) => {
    setError(null)
    if (!input || e.key !== "Enter") {
      return
    }
    const weatherData = await getWeather([e.target.value])
    if (weatherData.error) {
      setError(weatherData.error)
      return
    }
    if (!weatherData.length && weatherData[0]?.weather?.temp_c) {
      setError("Weather API response was not in the correct format.")
      return
    }
    const location = await addLocation({
      loc: weatherData[0].location,
      fav: false,
      weather: weatherData[0]?.weather,
    })
    if (location.error) {
      setError(
        `addLocation Error: local storage wasn't updated. Details: ${location.error}`
      )
      return
    }
    setLocations([...locations, location])
    setInput("")
  }

  return (
    <>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Welcome
          </Typography>

          <Stack
            sx={{ pt: 4 }}
            direction="column"
            justifyContent="center"
            spacing={2}
          >
            <TextField
              id="outlined-basic"
              label="Search locations"
              variant="outlined"
              onKeyPress={handlePressEnter}
              onChange={handleChange}
              value={input}
            />
            {error ? (
              <Typography
                variant="h5"
                align="left"
                color="text.secondary"
                paragraph
              >
                An error ocurred. Details: {error}
              </Typography>
            ) : null}
          </Stack>
        </Container>
      </Box>
    </>
  )
}
export default Search
