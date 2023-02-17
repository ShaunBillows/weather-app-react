import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faSun,
  faCloud,
  faCloudSun,
  faCloudShowersHeavy,
} from "@fortawesome/free-solid-svg-icons"
import Box from "@mui/material/Box"

const WeatherIcon = ({ time, weatherType, temperature }) => {
  let icon
  switch (weatherType) {
    case "sunny":
      icon = faSun
      break
    case "cloudy":
      icon = faCloud
      break
    case "partly cloudy":
      icon = faCloudSun
      break
    case "rainy":
      icon = faCloudShowersHeavy
      break
    default:
      icon = faSun
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "space-between",
        gap: 3,
        height: "100%",
      }}
    >
      <div>{time}</div>
      <FontAwesomeIcon icon={icon} />
      <div>{temperature}°C</div>
    </Box>
  )
}

export default WeatherIcon
