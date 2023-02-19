import { useTemp } from "../../context/useTemp"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faSun,
  faCloud,
  faCloudSun,
  faCloudShowersHeavy,
  faSnowflake,
  faBolt,
  faWind,
} from "@fortawesome/free-solid-svg-icons"

const WeatherIcon = ({ time, weatherType, temp_c, temp_f, icon }) => {
  const { tempUnit } = useTemp()

  let faIcon
  if (weatherType.includes("rain")) {
    faIcon = faCloudShowersHeavy
  } else if (
    weatherType.toLowerCase().includes("cloud") &&
    weatherType.includes("sun")
  ) {
    faIcon = faCloudSun
  } else if (weatherType.toLowerCase().includes("cloud")) {
    faIcon = faCloud
  } else if (weatherType.toLowerCase().includes("snow")) {
    faIcon = faSnowflake
  } else if (weatherType.toLowerCase().includes("storm")) {
    faIcon = faBolt
  } else if (weatherType.toLowerCase().includes("wind")) {
    faIcon = faWind
  } else {
    faIcon = faSun
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        height: "100%",
      }}
    >
      <Typography variant="p" align="center">
        {time}
      </Typography>
      <FontAwesomeIcon size="2x" icon={faIcon} />
      <img src={icon}></img>
      <Typography variant="p" align="center">
        {tempUnit === "°C" ? temp_c : temp_f}
        {tempUnit}
      </Typography>
    </Box>
  )
}

export default WeatherIcon
