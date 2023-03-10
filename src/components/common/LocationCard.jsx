import { useTemp } from "../../context/useTemp"
import { useState } from "react"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

const LocationCard = ({ location }) => {
  const { tempUnit } = useTemp()
  const temp_c = location.weather.temp_c
  const temp_f = location.weather.temp_f

  return (
    <>
      {location ? (
        <>
          <>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardContent>
                <Typography variant="h5" align="center">
                  {location.loc}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", my: 3 }}>
                  <Typography variant="h1" component="span">
                    {tempUnit === "°C" ? temp_c : temp_f}
                  </Typography>
                  <Typography variant="h2" component="span">
                    {tempUnit}
                  </Typography>
                </Box>
                <Box
                  sx={{ display: "flex", justifyContent: "center", my: 1 }}
                ></Box>
              </CardContent>
            </Card>
          </>
        </>
      ) : null}
    </>
  )
}
export default LocationCard
